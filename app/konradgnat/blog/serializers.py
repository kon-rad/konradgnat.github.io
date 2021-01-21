from rest_framework import serializers
from .models import Post
from .models import Room
from .models import Book

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post 
        fields = ('title', 'slug', 'author', 'tags', 'updated_on', 'content', 'created_on', 'status')

class RoomSerializer(serializers.ModelSerializer):

    class Meta:
        model = Room 
        fields = ('room_name', 'get_messages', 'get_users')


class BookSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book 
        fields = (
            'title',
            'slug',
            'image_url',
            'author',
            'tags',
            'updated_on',
            'read_on',
            'content',
            'preview',
            'created_on',
            'book_status',
            'status',
            'book_format',
        )
