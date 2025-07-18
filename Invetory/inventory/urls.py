from django.urls import path
from . import views

urlpatterns = [
    path('', views.displayItem,name="base"), 
]
