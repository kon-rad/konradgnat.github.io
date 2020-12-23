from rest_framework import serializers
from .models import Post
from .models import Room

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post 
        fields = ('title', 'slug', 'author', 'updated_on', 'content', 'created_on', 'status')

class RoomSerializer(serializers.ModelSerializer):

    class Meta:
        model = Room 
        fields = ('room_name', 'get_messages', 'get_users')

