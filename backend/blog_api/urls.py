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
    path('search/',PostListDetailFilter.as_view(),name='postSearch'),

    # ADMIN URLs
    path('admin/create/',CreatePost.as_view(),name='createpost'),
    path('admin/edit/postDetail/<int:pk>/',AdminPostDetail.as_view(),name='adminDetailPost'),
    path('admin/edit/<int:pk>/',EditPost.as_view(),name='editpost'),
    path('admin/delete/<int:pk>/',DeletePost.as_view(),name='deletepost'),
]