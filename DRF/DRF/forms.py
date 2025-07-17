from django import forms
from .models import DevEmployee, Position

class EmployeeForms(forms.ModelForm):

    class Meta:
        model = DevEmployee
        fields= '__all__'

    def __init__(self, *args, **kwargs):
        super(EmployeeForms,self).__init__(*args, **kwargs)
        # You can add customizations here if needed
        self.fields['position'].queryset = Position.objects.all()
