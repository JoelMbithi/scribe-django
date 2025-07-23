from django.db import models

# Create your models here.


class Products(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    image = models.ImageField(upload_to='products/', blank=True, null=True)

    def __str__(self):
        return self.name
    


class Users(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=200)
