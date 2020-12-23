from django.contrib import admin
from .models import Post
from .models import Room
from .models import ChatUser
from .models import Message

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'status','created_on')
    list_filter = ("status",)
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}
class RoomAdmin(admin.ModelAdmin):
    list_display = ('room_name', 'get_users', 'get_messages')

class ChatUserAdmin(admin.ModelAdmin):
    list_display = ['user_name']
    
    
class MessageUserAdmin(admin.ModelAdmin):
    list_display = ['message']
  
admin.site.register(Post, PostAdmin)
admin.site.register(Room, RoomAdmin)
admin.site.register(ChatUser, ChatUserAdmin)
admin.site.register(Message, MessageUserAdmin)