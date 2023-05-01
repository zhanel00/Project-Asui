from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from recipe.models import Ingredient, Recipe, Direction, RecipeIngredient, MeasurementUnit, MeasurementQuantity
from recipe.serializers import RecipeSerializer


class RecipeDetailAPIView(APIView):
    def get_object(self, recipe_id):
        try:
            return Recipe.objects.get(pk=recipe_id)
        except Recipe.DoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, recipe_id):
        instance = self.get_object(recipe_id)
        serializer = RecipeSerializer(instance)
        return Response(serializer.data)

    def put(self, request, recipe_id):
        instance = self.get_object(recipe_id)
        serializer = RecipeSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, recipe_id):
        instance = self.get_object(recipe_id)
        instance.delete()
        return Response({'deleted': True})

