from .views import *
from rest_framework.routers import DefaultRouter
from django.urls import path


app_name = 'blog_api'

# router = DefaultRouter()
# router.register('', PostList, basename='post')
# urlpatterns = router.urls

urlpatterns = [
    path('',PostList.as_view(),name='listcreate'),
    path('<int:pk>/',PostDetail.as_view(),name='detailcreate'),
    path('search/custom/',PostListDetailFilter.as_view(),name='postSearch')
]