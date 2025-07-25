from django.shortcuts import render, redirect

from django.contrib import messages
from django.contrib.auth import get_user_model
from .forms import  CreateProduct,CreateOrder
from .models import Products, Orders
from django.db.models import Sum
from django.db.models.functions import TruncMonth
import json



def displayItem(request):
    return render(request, 'Base/base.html')

def Dashboard(request):

    User = get_user_model()

     # Example monthly data (adjust this to match your model and fields)
    monthly_data = (
        Orders.objects
        .annotate(month=TruncMonth('date'))  # Group by month
        .values('month')
        .annotate(
            total_profit=Sum('profit'),  # change field names as needed
            total_expense=Sum('expense')
        )
        .order_by('month')
    )

       # Prepare data for Chart.js
    labels = [entry['month'].strftime('%b') for entry in monthly_data]
    profit_data = [entry['total_profit'] for entry in monthly_data]
    expense_data = [entry['total_expense'] for entry in monthly_data]

    total_users = User.objects.count()
    total_products = Products.objects.count()
    total_orders = Orders.objects.count()
    total_stocks = Products.objects.aggregate(total_stock_count=Sum('stock'))['total_stock_count'] or 0
    out_of_stock = Products.objects.filter(stock=0).count()
  

    context = {
        'total_users': total_users,
        'total_products': total_products,
        'total_orders': total_orders,
        'total_stocks': total_stocks,
        'out_of_stock': out_of_stock,

        'chart_labels': json.dumps(labels),
        'profit_data': json.dumps([float(p) for p in profit_data]),
        'expense_data': json.dumps([float(e) for e in expense_data]),

    }
    return render(request, "Dashboard/Dashboard.html", context)


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
            cost_price = order.product.cost_price  # Assuming 'cost_price' is a field in the Product model
            order.profit = (order.product.price - cost_price) * order.order_quantity
            order.expense = cost_price * order.order_quantity
            order.save()
            return redirect('')  # redirect to a success page
    else:
        form = CreateOrder()
         
        orders = Orders.objects.select_related('product', 'staff').all().order_by('-date')  # fetch orders with related data
   
    return render(request, 'Order/placeOrder.html', {
        'form': form,
        'orders': orders
    })
   

