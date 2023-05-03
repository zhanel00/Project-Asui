from django.db import models
from signup.models import User


# Create your models here.
class Ingredient(models.Model):
    name = models.CharField(max_length=250)

    class Meta:
        verbose_name = 'Ingredient'
        verbose_name_plural = 'Ingredients'

    def __str__(self):
        return self.name


class Recipe(models.Model):
    title = models.CharField(max_length=255)
    ingredients = models.ManyToManyField(Ingredient, through="Recipe_ingredients")
    reviews = models.IntegerField()
    rating = models.FloatField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    difficulty = models.CharField(max_length=255)
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    servings = models.CharField()

    class Meta:
        verbose_name = 'Recipe'
        verbose_name_plural = 'Recipes'

    def __str__(self):
        return f'{self.id}: {self.title}, email: {self.author}'


class Direction(models.Model):
    recipe = models.ForeignKey(Recipe, related_name='directions', on_delete=models.CASCADE())
    step = models.IntegerField()
    content = models.CharField

    class Meta:
        verbose_name = 'Direction'
        verbose_name_plural = 'Directions'

    def __str__(self):
        return f'{self.step}: {self.content}'


class MeasurementUnit(models.Model):
    unit = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'MeasurementUnit'
        verbose_name_plural = 'MeasurementUnits'

    def __str__(self):
        return self.unit


class MeasurementQuantity(models.Model):
    qty = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'MeasurementQuantity'
        verbose_name_plural = 'MeasurementQuantities'

    def __str__(self):
        return self.qty


class RecipeIngredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE())
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE())
    measurement_unit = models.ForeignKey(MeasurementUnit, on_delete=models.CASCADE())
    measurement_quantity = models.ForeignKey(MeasurementQuantity, on_delete=models.CASCADE())

    class Meta:
        verbose_name = 'RecipeIngredient'
        verbose_name_plural = 'RecipeIngredients'

    def __str__(self):
        return f'{self.recipe}: {self.measurement_quantity} {self.measurement_unit} of {self.ingredient}'


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE())
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE())
    rating = models.IntegerField(default=0)

    def __str__(self):
        return self.recipe.title + ": " + self.rating
