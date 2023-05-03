from rest_framework import serializers
from .models import User, Bookmark
from recipe.serializers import RecipeSerializer


class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['user', 'recipe']


class UserSerializer(serializers.ModelSerializer):
    saved_recipes = RecipeSerializer(read_only=True, many=True)

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'username', 'password', 'saved_recipes')
        read_only_field = ['id']
