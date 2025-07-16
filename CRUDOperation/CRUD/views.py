from django.shortcuts import render, redirect
from .models import EmployeeModel
from django.contrib import messages
from .forms import EmployeeForms

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
            saveRecord.salary = int(request.POST.get("salary"))
            saveRecord.gender=request.POST.get('gender')
            saveRecord.save()

            messages.success(request,"Employee "+saveRecord.name+ "Is saved Successfully!")
            return redirect('index')
            return render(request,'insert.html')
        else:
            return render(request,"insert.html")
        
    return render(request, "insert.html")


def EditEmployee(request,id):
    editEmployee=EmployeeModel.objects.get(id=id)
    return render(request,'Edit.html',{"EmployeeModel":editEmployee})

def updateEmployee(request,id):
    updatedEmployee=EmployeeModel.objects.get(id=id)
    form=EmployeeForms(request.POST,instance=updatedEmployee)
    if form.is_valid():
        form.save()
        messages.success(request,"Record Updated Successful")
        return redirect("index")
       
        return render(request,"Edit.html",{"EMployeeModel":updatedEmployee})
    

def deleteEmployee(request,id):
    deletedEmployee=EmployeeModel.objects.get(id=id)
    deletedEmployee.delete()
    showData=EmployeeModel.objects.all()
    return redirect("index")
    return render(request,"index.html",{"EmployeeModel":showData}) 