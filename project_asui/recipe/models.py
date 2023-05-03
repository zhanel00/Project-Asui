from django.db import models
from users.models import User

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=255)
    reviews = models.IntegerField()
    rating = models.FloatField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    difficulty = models.CharField(max_length=255)
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    servings = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Recipe'
        verbose_name_plural = 'Recipes'

    def __str__(self):
        return f'{self.id}: {self.title}, email: {self.author}'
