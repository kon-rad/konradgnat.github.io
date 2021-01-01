from django.db import models

# Create your models here.

RATING_CHOICES = [
  (1, '1'),
  (2, '2'),
  (3, '3'),
  (4, '4'),
  (5, '5'),
  (6, '6'),
  (7, '7'),
  (8, '8'),
  (9, '9'),
  (10, '10')
]
GENERAL = 'GENERAL'
TYPE_CHOICES = [
  (GENERAL, GENERAL)
]
class Quote(models.Model):
  text = models.TextField(unique=True)
  author = models.CharField(max_length=200, default="Anonymous")
  tags = models.CharField(max_length=200, null=True, blank=True)
  rating = models.IntegerField(choices=RATING_CHOICES, default=5)
  type = models.CharField(choices=TYPE_CHOICES, default=GENERAL, max_length=200)

  def __str__(self):
    return self.text[0:20]



