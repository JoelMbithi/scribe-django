from django.shortcuts import render, redirect

from django.contrib import messages
from .forms import  CreateProduct,CreateOrder
from .models import Products, Orders


def displayItem(request):
    return render(request, 'Base/base.html')

def Dashboard(request):
    return render(request, "Dashboard/Dashboard.html")


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




def Order(request):
    if request.method == 'POST':
        form = CreateOrder(request.POST, request.FILES)
        if form.is_valid():
            order = form.save(commit=False)
            #order.staff = User.objects.get(email='custom_user@example.com')  # or fetch using session
            order.staff = request.user # or fetch using session
            order.save()
            return redirect('')  # redirect to a success page
    else:
        form = CreateOrder()
         
        orders = Orders.objects.select_related('product', 'staff').all().order_by('-date')  # fetch orders with related data
    return render(request, 'Order/placeOrder.html', {
        'form': form,
        'orders': orders
    })
   
