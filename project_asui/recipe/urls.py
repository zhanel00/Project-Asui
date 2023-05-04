from django.urls import path

from .views import cbv, fbv

urlpatterns = [
    path('', cbv.RecipeListView.as_view()),
    path('<int:recipe_id>/', cbv.RecipeDetailView.as_view()),
    path('<int:recipe_id>/save/', cbv.RecipeSaveView.as_view()),
    path('<int:recipe_id>/rating/', fbv.recipe_rating),
    # maybe shoplist
]