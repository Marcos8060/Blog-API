from .views import PostList
from rest_framework.routers import DefaultRouter


app_name = 'blog_api'

router = DefaultRouter()
router.register('', PostList, basename='post')
urlpatterns = router.urls

# urlpatterns = [
#     path('',views.PostList.as_view(),name='listcreate'),
#     path('<int:pk>',views.PostDetail.as_view(),name='detailcreate')
# ]