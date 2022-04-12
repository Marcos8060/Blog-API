from django.test import TestCase
from django.contrib.auth.models import User
from .models import *

# Create your tests here.
class Test_Create_Post(TestCase):

    @classmethod
    def setUpTestData(cls):
        test_category = Category.objects.create(name='Django')
        testuser1 = User.objects.create_user(username='test_user1',password='1234789')
        test_post = Post.objects.create(category_id=1,title='Post Title',excerpt='Post excerpt',content='Post Content',slug='post-title',author_id=1,status='published')


    def test_blog_content(self):
        post = Post.postobjects.get(id=2)
        cat = Category.objects.get(id=1)
        author = f'{post.author}'
        title= f'{post.title}'
        excerpt = f'{post.excerpt}'
        content = f'{post.content}'
        status = f'{post.status}'
        self.assertEqual(author,'test_user1')
        self.assertEqual(title,'Post Title')
        self.assertEqual(content,'Post Content')
        self.assertEqual(status,'published')
        self.assertEqual(str(post),'Post Title')
        self.assertEqual(str(cat),'django')


