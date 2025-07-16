from django.urls import path
from . import views

urlpatterns = [
    path('',views.showEmployee,name="index"),
    path('insert/',views.insertEmployee,name="insert"),
    path('edit/<int:id>',views.EditEmployee,name='edit'),
    path('update/<int:id>',views.updateEmployee,name='update'),
    path('delete/<int:id>',views.deleteEmployee,name='delete')
]
