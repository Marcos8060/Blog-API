from rest_framework import generics
from blog.models import *
from .serializers import *
from rest_framework.permissions import IsAdminUser,DjangoModelPermissions,BasePermission,SAFE_METHODS

# only allows the owner of the post to make changes
class PostUserWritePermission(BasePermission):
        message = 'Editing posts is restricted to the owner only.'

        def has_object_permission(self, request, view, obj):
            if request.method in SAFE_METHODS:
                return True
            
            return obj.author == request.user



class PostList(generics.ListCreateAPIView):
    permission_classes = [DjangoModelPermissions]
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView,PostUserWritePermission):
    permission_classes = [PostUserWritePermission]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
