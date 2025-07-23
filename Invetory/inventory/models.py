from django.db import models

# Create your models here.
# CATEGORY = (
#     ('Stationary', 'Stationary'),
#     ('Electronic', 'Electronic'),
#     ('Food', 'Food')
# )

# class Products(models.Model):
#     name = models.CharField(max_length=100)
#     category = models.CharField(max_length=100, choices=CATEGORY)
#     quantity = models.PositiveIntegerField()

class Users(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=200)
