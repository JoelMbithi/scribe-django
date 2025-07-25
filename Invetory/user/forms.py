# user/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class RegisterForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ['name', 'email', 'password1', 'password2']

    def __init__(self, *args, **kwargs):
        super(RegisterForm, self).__init__(*args, **kwargs)
        self.fields['email'].widget.attrs.update({'placeholder': 'Email'})
        self.fields['name'].widget.attrs.update({'placeholder': 'Full Name'})
        self.fields['password1'].widget.attrs.update({'placeholder': 'Password'})
        self.fields['password2'].widget.attrs.update({'placeholder': 'Confirm Password'})
