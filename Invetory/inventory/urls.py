from django.urls import path
from . import views

urlpatterns = [
    path('', views.displayItem,name="base"), 
    path('dashboard/',views.Dashboard,name="dashboard"),
     path('login/',views.login_view,name="login"),
     path('register/',views.Register,name="register"),
]
