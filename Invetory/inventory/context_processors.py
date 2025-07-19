# inventory/context_processors.py
from django.utils import timezone
from datetime import timedelta
from .menu_data import MENU_ITEMS

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