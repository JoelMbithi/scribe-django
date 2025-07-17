from django.db import models

# Create your models here.
class Position(models.Model):
    title=models.CharField(max_length=50)
    
    def __str__(self):
        return self.title
    
class DevEmployee(models.Model):
    fullname=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    phoneNumber=models.CharField(max_length=20)
    position=models.ForeignKey(Position,on_delete=models.CASCADE)