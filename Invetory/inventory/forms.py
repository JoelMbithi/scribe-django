from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms 
from .models import Products,Orders




class CreateProduct(forms.ModelForm):
    class Meta:
        model = Products
        fields = ['name', 'category', 'price', 'stock', 'image']


class CreateOrder(forms.ModelForm):
    class Meta:
        model = Orders
        exclude = ['date', 'staff']