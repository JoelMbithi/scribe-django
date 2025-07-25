from django.db import models
from django.conf import settings

# Create your models here.


class Products(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    image = models.ImageField(upload_to='products/', blank=True, null=True)

    def __str__(self):
        return self.name
    




class Orders(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    staff = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    order_quantity = models.PositiveIntegerField()
    date = models.DateTimeField(auto_now_add=True)

    def  __str__(self):
        return f'{self.product} ordered by {self.staff.username}'
    