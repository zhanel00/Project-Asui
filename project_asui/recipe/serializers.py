from rest_framework import serializers
from models import *


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name']


class DirectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direction
        fields = ['id', 'recipe', 'step', 'content']


class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(read_only=True, many=True)
    directions = DirectionSerializer(read_only=True, many=True)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'ingredients', 'directions', 'reviews', 'rating', 'author', 'difficulty', 'prep_time',
                  'cook_time',
                  'servings']


class MeasurementUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeasurementUnit
        fields = ['id', 'unit']


class MeasurementQuantitySerializer(serializers.ModelSerializer):
    class Meta:
        model = MeasurementQuantity
        fields = ['id', 'qty']


class RecipeIngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeIngredient
        fields = ['recipe', 'ingredient', 'measurement_unit', 'measurement_quantity']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['user', 'recipe', 'rating']
