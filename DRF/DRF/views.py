from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .forms import EmployeeForms
from .models import Position
from .models import DevEmployee

# Create your views here.
def Employee_List(request):
    context={'employees_list': DevEmployee.objects.all()}
    return render(request,'DRF/home.html',context)

#create form 
def Employee_Form(request):
    #get all position in db
    positions = Position.objects.all().order_by('title')

    if request.method== 'POST':
     #create a dictionary matching fields in model
     form_data = {
         'fullname': request.POST.get('fullname'),
            'email': request.POST.get('email'),
            'phoneNumber': request.POST.get('phoneNumber'),
            'position': Position.objects.get_or_create(title=request.POST.get('position'))[0]
          }

     form= EmployeeForms(form_data)
     if form.is_valid():
        form.save()
        messages.success(request, "Employee added successfully!")
        return redirect('home')
    else:
        form =EmployeeForms()

    return render(request,'DRF/form.html',{'form':form,'positions':positions})

#update employee

def updateEmployee(request, id):
    positions = Position.objects.order_by('title')
    employee = get_object_or_404(DevEmployee, pk=id)

    if request.method == 'POST':
        # build dict matching your form fields
        form_data = {
            'fullname':    request.POST.get('fullname'),
            'email':       request.POST.get('email'),
            'phoneNumber': request.POST.get('phoneNumber'),
            'position':    Position.objects.get_or_create(
                               title=request.POST.get('position')
                           )[0]
        }
        form = EmployeeForms(form_data, instance=employee)
        if form.is_valid():
            form.save()
            messages.success(request, "Employee updated successfully!")
            return redirect('home')
    else:
        # GET → bind the instance for pre‑populate
        form = EmployeeForms(instance=employee)

    return render(request, 'DRF/update.html', {
        'form':        form,
        'positions':   positions,
        'is_update':   True,
        'employee':    employee,
    })


#delete employee
def deleteEmployee(request,id):
    employee = get_object_or_404(DevEmployee,pk=id)

    if request.method == 'POST' :
       employee.delete()
       messages.success(request,"Successful Deleted Employee")
       return redirect('home')
    

    return render(request,'DRF/delete.html',{'employee':employee})