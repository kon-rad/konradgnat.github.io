from . import views
from django.urls import path

urlpatterns = [
    path('', views.home, name='home'),
    path('blog', views.PostList.as_view(), name='blog'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
    path('books', views.BooksList.as_view(), name='books'),
    path('books/<slug:slug>/', views.BookDetail.as_view(), name='book_detail'),
    path('projects', views.ProjectsList.as_view(), name='projects'),
    path('projects/<slug:slug>/', views.ProjectDetail.as_view(), name='project_detail'),
]