from django.urls import path
from . import views

urlpatterns = [
    path('', views.displayItem,name="base"), 
    path('home/',views.Dashboard,name="home")
]
