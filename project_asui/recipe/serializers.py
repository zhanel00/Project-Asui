from recipe.models import Recipe
from rest_framework import serializers


class RecipeSerializer2(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = ('id', 'title', 'reviews', 'rating', 'author', 'difficulty', 'prep_time', 'cook_time', 'servings')
