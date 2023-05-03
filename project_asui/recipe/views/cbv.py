from django.shortcuts import Http404

from rest_framework import status
from rest_framework.views import APIView

from rest_framework.response import Response

from recipe.models import Recipe
from recipe.serializers import RecipeSerializer2

class RecipeListView(APIView):
    def get(self, request):
        recipes = Recipe.objects.all()
        serializer = RecipeSerializer2(recipes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RecipeSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class RecipeDetailView(APIView):
    def get_object(self, pk):
        try:
            return Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, *args, **kwargs):
        pk = self.kwargs.get('pk')
        recipe = self.get_object(pk)
        serializer = RecipeSerializer2(recipe)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):
        pk = self.kwargs.get('pk')
        recipe = self.get_object(pk)
        serializer = RecipeSerializer2(recipe, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        pk = self.kwargs.get('pk')
        recipe = self.get_object(pk)
        recipe.delete()
        return Response({'delete': True}, status=status.HTTP_202_ACCEPTED)