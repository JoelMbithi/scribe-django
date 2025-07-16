from django.urls import path
from . import views

urlpatterns = [
    path('',views.showEmployee,name="index"),
    path('insert/',views.insertEmployee,name="insert")
]
