from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserSerializer
from .models import User
from rest_framework.response import Response

from .tokens import create_jwt_pair_for_user


# view for registering users
@api_view(['POST'])
@permission_classes([AllowAny, ])
def register(request):
    serializer = UserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST', 'GET'])
@permission_classes([AllowAny, ])
def login(request):
    if request.method == "POST":
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)

        if user is not None:

            tokens = create_jwt_pair_for_user(user)

            response = {"message": "Success", "tokens": tokens}
            return Response(data=response, status=status.HTTP_200_OK)

        else:
            return Response(data={"message": "Invalid email or password"})
    if request.method == "GET":
        return Response({"user": UserSerializer(request.user).data, "auth": str(request.auth)}, status=status.HTTP_200_OK)


@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def profile(request):
    if request.method == "GET":
        user = User.objects.get(user=request.user)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == "PUT":
        partial = True
        user = User.objects.get(user=request.user)
        serializer = UserSerializer(user, data=request.data, partial=partial)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

