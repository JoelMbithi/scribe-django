from django import forms
from .models import DevEmployee

class EmployeeForms(forms.ModelForm):

    class Meta:
        model = DevEmployee
        fields= '__all__'