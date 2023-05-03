from django.urls import path

from views import cbv

urlpatterns = [
    path(''),
    path('<int:recipe_id>/', cbv.RecipeDetailView.as_view()),
    path('<int:recipe_id>/save/', cbv.RecipeSaveView.as_view()),
    path('<int:recipe_id>/post_rating/', ),
    # maybe shoplist
]