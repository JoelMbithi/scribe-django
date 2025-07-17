from django.shortcuts import render, redirect
from .forms import EmployeeForms

# Create your views here.
def Employee_List(request):
    return render(request,'DRF/home.html')

#create form 
def Employee_Form(request):
   if request.method== 'POST':
     form = EmployeeForms(request.POST)


     if form.is_valid():
        form.save()
        return redirect('home')
   else:
        form =EmployeeForms()
        return render(request,'DRF/form.html',{'form':form})