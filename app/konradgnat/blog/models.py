from django.db import models
from django.contrib.auth.models import User


STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='blog_posts')
    updated_on = models.DateTimeField(auto_now= True)
    content = models.TextField()
    preview = models.CharField(max_length=200)
    created_on = models.DateTimeField(null=True, blank=True)
    status = models.IntegerField(choices=STATUS, default=0)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title

class ChatUser(models.Model):
    user_name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.user_name

class Message(models.Model):
    username = models.ForeignKey(ChatUser, on_delete=models.CASCADE)
    message = models.CharField(max_length=250, unique=True)
    pub_date = models.DateField()

    def __str__(self):
        return self.message

    def get_user(self):
        return "\n".join([u.user_name for u in self.username.all()])
class Room(models.Model):
    room_name = models.CharField(max_length=200, unique=True)
    users = models.ManyToManyField(ChatUser)
    messages = models.ManyToManyField(Message)

    def __str__(self):
        return self.room_name

    def get_users(self):
        return "\n".join([u.user_name for u in self.users.all()])

    def get_messages(self):
        return "\n".join([m.message for m in self.messages.all()])