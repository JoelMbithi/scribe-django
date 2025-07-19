# views.py
from django.shortcuts import render

# All your view functions without menu data
def displayItem(request):
    return render(request, 'Base/base.html')

def Dashboard(request):
    return render(request, "Dashboard/Dashboard.html")

def Login(request):
    return render(request, "Auth/Login.html")
     
def Register(request):
    return render(request, "Auth/Register.html")