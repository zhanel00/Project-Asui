from django.contrib import admin
from signup.models import User
# Register your models here.
@admin.register(User)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'email', 'password')
