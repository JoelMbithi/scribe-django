from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate  # Import authenticate
from django.contrib import messages
from .forms import RegisterForm, CreateProduct
from .models import Products

def displayItem(request):
    return render(request, 'Base/base.html')

def Dashboard(request):
    return render(request, "Dashboard/Dashboard.html")

def login_view(request):  
    if request.method == 'POST':
        username = request.POST.get('username') 
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

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
            return redirect('')
    else:
        form = RegisterForm()

    return render(request, "Auth/Register.html", {'form': form})

def Product(request):
    if request.method == 'POST':
        form = CreateProduct(request.POST, request.FILES) 
        if form.is_valid():
           form.save()
           return redirect("products")
    else:
        form = CreateProduct()
        # fetch all products
    products = Products.objects.all()
    return render(request, 'Product/product.html', {
        'form': form,
        'products': products
    })

    return render(request, 'Product/product.html',{'form':form})



