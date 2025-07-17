from django.urls import path
from . import views

urlpatterns = [
    path('',views.Employee_List, name="home"),
    path('forms/',views.Employee_Form,name='forms'),
     path('update/<int:id>',views.updateEmployee, name="update"),
     path('delete/<int:id>',views.deleteEmployee,name='delete'),
    
]
