from django.shortcuts import render, redirect
from .models import EmployeeModel
from django.contrib import messages

# Create your views here.

def showEmployee(request):
    showAll=EmployeeModel.objects.all()
    return render(request, 'index.html',{"data":showAll})


def insertEmployee(request):
    if request.method=='POST':
        if request.POST.get('name') and request.POST.get('email') and request.POST.get('occupation') and request.POST.get('salary') and request.POST.get('gender'):  
            saveRecord=EmployeeModel()
            saveRecord.name=request.POST.get("name")
            saveRecord.email=request.POST.get('email')
            saveRecord.occupation=request.POST.get('occupation')
            saveRecord.salary = request.POST.get("salary")
            saveRecord.gender=request.POST.get('gender')
            saveRecord.save()

            messages.success(request,"Employee "+saveRecord.name+ "Is saved Successfully!")
            return redirect('index')
            return render(request,'insert.html')
        else:
            return render(request,"insert.html")
        
    return render(request, "insert.html")