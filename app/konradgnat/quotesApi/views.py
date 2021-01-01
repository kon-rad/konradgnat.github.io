from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser
from .serializers import QuoteSerializer
from .models import Quote

class QuoteViewSet(viewsets.ModelViewSet):
  # Todo: make text field unique
  lookup_field = 'text'
  queryset = Quote.objects.all()
  serializer_class = QuoteSerializer
  # Todo: allow only POST for admin user
  permission_classes = [IsAdminUser]
