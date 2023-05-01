from django.urls import path

from views import cbv

urlpatterns = [
    path(''),
    path('<int:recipe_id>/', cbv.RecipeDetailAPIView.as_view()),
    path('<int:recipe_id>/save/', ),
    path('<int:recipe_id>/post_rating/', ),
    # maybe shoplist
]
