from django.urls import path
from .views import CustomUserCreate


app_name = 'users'

# the route for creating a user
urlpatterns = [
    path('register/',CustomUserCreate.as_view(),name='create_user')
]