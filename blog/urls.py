from django.urls import path


urlpatterns = [
    path('',TemplateView.as_view(template_name='blog/index.html'))
]