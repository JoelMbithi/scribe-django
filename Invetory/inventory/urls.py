from django.conf.urls.static import static
from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('', views.displayItem,name="base"), 
    path('dashboard/',views.Dashboard,name="dashboard"),
     path('login/',views.login_view,name="login"),
     path('register/',views.Register,name="register"),
     path('products/',views.Product,name="products"),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
