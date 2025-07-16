from django.urls import path
from . import views

urlpatterns = [
    path("",views.home , name="blog-home"),
    path("about/",views.about, name="blog-about"),
    path("contact/",views.contact, name="contact"),
    path("service/",views.service,name="service"),
    path("blog/",views.blog,name="blog"),
    path("register/",views.Register, name="Register"),
    path("login/",views.Login, name="login"),
]
