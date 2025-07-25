from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth import login, authenticate 
from .forms import RegisterForm

# Create your views here.


def login_view(request):  
    if request.method == 'POST':
        email = request.POST.get('email') 
        password = request.POST.get('password')

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            return redirect('base')
        else:
             messages.error(request, "Invalid email or password")
             return render(request, "Auth/Login.html")
        
    return render(request, "Auth/Login.html")
def Register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  
            return redirect('login')
    else:
        form = RegisterForm()

    return render(request, "Auth/Register.html", {'form': form})