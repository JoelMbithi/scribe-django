# inventory/context_processors.py
from django.utils import timezone
from datetime import timedelta
from .menu_data import MENU_ITEMS

from .models import Products
from django.contrib.auth import get_user_model
from .models import Orders
from django.db.models import Sum

def global_data(request):
    total_products = Products.objects.count()
    total_users = get_user_model().objects.count()
    total_orders = Orders.objects.count()
    total_stocks = Products.objects.aggregate(total_stock_count=Sum('stock'))['total_stock_count'] or 0
    out_of_stock = Products.objects.filter(stock=0).count()

    return {
        'total_products': total_products,
        'total_users': total_users,
        'total_orders': total_orders,
        'total_stocks': total_stocks,
        'out_of_stock': out_of_stock,
    }

def menu_items(request):
    # Process menu items
    processed_menu = []
    for item in MENU_ITEMS:
        try:
            new_item = item.copy()
            new_item['is_active'] = request.path.startswith(item.get('url', '/invalid'))
            processed_menu.append(new_item)
        except Exception:
            continue
    
    # Add sample recent activities
    recent_activities = [
        {
            'type': 'new_product',
            'message': 'iPhone 13 Pro added',
            'time': timezone.now() - timedelta(minutes=5),
            'icon': 'plus'
        },
        {
            'type': 'order_processed',
            'message': 'Order #4567 processed',
            'time': timezone.now() - timedelta(hours=1),
            'icon': 'package'
        }
    ]
    
    return {
        'menu': processed_menu,
        'recent_activities': recent_activities
    }

def global_orders(request):
    orders = Orders.objects.all().order_by('-date')[:3]
    return {
        'orders': orders,
        'total_orders_count': orders.count()
    }