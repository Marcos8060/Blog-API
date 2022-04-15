from django.shortcuts import get_object_or_404
from rest_framework import generics
from blog.models import *
from .serializers import *
from rest_framework.permissions import IsAdminUser,DjangoModelPermissionsOrAnonReadOnly,BasePermission,SAFE_METHODS,AllowAny,IsAuthenticated
from rest_framework import viewsets
from rest_framework.response import Response

# only allows the owner of the post to make changes
class PostUserWritePermission(BasePermission):
        message = 'Editing posts is restricted to the owner only.'

        def has_object_permission(self, request, view, obj):
            if request.method in SAFE_METHODS:
                return True
            
            return obj.author == request.user


class PostList(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    query_set = Post.postobjects.all()


    # post list view
    def list(self,request,):
        serializer_class = PostSerializer(self.query_set,many=True)
        return Response(serializer_class.data)

    # post detail view
    def retrieve(self,request,pk=None):
        post = get_object_or_404(self.query_set, pk=pk)    
        serializer_class = PostSerializer(post)
        return Response(serializer_class.data)



# class PostList(generics.ListCreateAPIView):
#     permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
#     queryset = Post.postobjects.all()
#     serializer_class = PostSerializer


# class PostDetail(generics.RetrieveUpdateDestroyAPIView,PostUserWritePermission):
#     permission_classes = [PostUserWritePermission]
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
