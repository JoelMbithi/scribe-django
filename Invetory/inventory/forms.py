from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms 
from .models import Products


class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields =  ['username', 'email', 'password1', 'password2']


class CreateProduct(forms.ModelForm):
    class Meta:
        model = Products
        fields = ['name', 'category', 'price', 'stock', 'image']
