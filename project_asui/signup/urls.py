from django.urls import path
from .views import RegisterView, LoginView, UserView, LogOutView

urlpatterns = [
    path('signup', RegisterView.as_view()),
    path('signin', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogOutView.as_view())
]
