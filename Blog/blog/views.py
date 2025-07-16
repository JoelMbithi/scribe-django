from django.shortcuts import render
from django.http import HttpResponse


#data
post = [
    {
        'author':'Joe',
        'title':'Blog Post 1',
        'content':'This is my first Post',
        'date_posted':'8th july 2025'
    },
    {
        'author':'Mbithi',
        'title':'Blog Post 2',
        'content':'This is my second Post',
        'date_posted':'8th july 2025'
    }
]



# Create your views here.
context={
    'posts':post
}

def home(request):
    return render(request,"home/home.html",context)

def about(request):
    return render(request,"blog/about.html",{"title":'About Page'})

def contact(request):
    return render(request, "contacts/contact.html",context)

def service(request):
    return render(request, "services/service.html",context)

def blog(request):
    return render(request,"blog/blog.html",context)

def Register(request):
    return render(request,"Auth/Register.html",context)

def Login(request):
    return render(request,"Auth/Login.html",context)