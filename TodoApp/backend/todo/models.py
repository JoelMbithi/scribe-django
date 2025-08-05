from django.db import models

# Create your models here.
class Todo(models.Model):
    body = models.CharField(max_length= 300)
    complete = models.BooleanField(default= False)
    updated = models.DateTimeField(auto_now = True)
    priority = models.CharField(max_length=200, default='Low')
    status = models.CharField(max_length=200, default='Pending')
    created = models.DateTimeField(auto_now_add = True)