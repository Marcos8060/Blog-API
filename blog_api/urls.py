from django.urls import path


urlpatterns = [
    path('',PostList.as_view(),name='listcreate'),
    path('<int:pk>',PostDetail.as_view(),name='detailcreate')
]