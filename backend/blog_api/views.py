from django.shortcuts import get_object_or_404
from requests import request
from rest_framework import generics
from blog.models import *
from .serializers import *
from rest_framework.permissions import IsAdminUser,DjangoModelPermissionsOrAnonReadOnly,BasePermission,SAFE_METHODS,AllowAny,IsAuthenticated
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import filters

# only allows the owner of the post to make changes
class PostUserWritePermission(BasePermission):
        message = 'Editing posts is restricted to the owner only.'

        def has_object_permission(self, request, view, obj):
            if request.method in SAFE_METHODS:
                return True
            
            return obj.author == request.user


# class PostList(viewsets.ModelViewSet):
#     permission_classes = [PostUserWritePermission]
#     serializer_class = PostSerializer

    # detail view
    # def get_object(self, queryset= None, **kwargs):
    #     item = self.kwargs.get('pk')
    #     return get_object_or_404(Post, slug=item)


    # def get_queryset(self):
    #     return Post.objects.all()

# class PostList(viewsets.ViewSet):
#     permission_classes = [IsAuthenticated]
#     query_set = Post.postobjects.all()


    # post list view
    # def list(self,request,):
    #     serializer_class = PostSerializer(self.query_set,many=True)
    #     return Response(serializer_class.data)

    # post detail view
    # def retrieve(self,request,pk=None):
    #     post = get_object_or_404(self.query_set, pk=pk)    
    #     serializer_class = PostSerializer(post)
    #     return Response(serializer_class.data)



class PostList(generics.ListAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    # filter based on the owner of the post
    # def get_queryset(self):
    #     user = self.request.user
    #     return Post.objects.filter(author=user)


class PostDetail(generics.RetrieveUpdateDestroyAPIView,PostUserWritePermission):
    permission_classes = [PostUserWritePermission]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostListDetailFilter(generics.ListAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['=title']  #exact match search
    # ['^slug'] starts-with search functionality
    # ['@']  full text search works best with postgresql
    # ['$']  regex search


