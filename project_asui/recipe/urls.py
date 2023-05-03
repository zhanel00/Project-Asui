from django.urls import path, re_path

from recipe.views import RecipeListView, RecipeDetailView

urlpatterns = [
    path('recipes', RecipeListView.as_view()),
    path('recipes/<int:pk>', RecipeDetailView.as_view()),

]
