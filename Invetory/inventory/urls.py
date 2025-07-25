from django.conf.urls.static import static
from django.urls import path
from . import views
from django.conf import settings
from user import views as user_view


urlpatterns = [
    path('', views.displayItem,name="base"), 
    path('dashboard/',views.Dashboard,name="dashboard"),
     path('login/',user_view.login_view,name="login"),
     path('register/',user_view.Register,name="register"),
     path('products/',views.Product,name="products"),
     path('order/',views.Order,name="order"),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
