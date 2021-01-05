"""konradgnat URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, re_path, include
from blog import views
from django.conf.urls import url

# get quotes from here	
# https://konradgnat.com/quotes-api/quotes/

urlpatterns = [
    path('admin/', admin.site.urls),
    path('quotes-api/', include('quotesApi.urls')),
    path('', include('blog.urls')),
    # re_path(r'^api/post/$', views.post_list),
    # re_path(r'^api/post/([a-z])$', views.post_detail),
    # re_path(r'^api/rooms/$', views.room_list),
    # re_path(r'^api/rooms/([a-z])$', views.room_detail),
    # re_path(r'^api/rooms/([a-z])/messages$', views.room_messages)
]