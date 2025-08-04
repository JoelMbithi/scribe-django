
from django.urls import path,include
from .views import RoomView,CreateBooking,GetRoom

urlpatterns = [
    path('rooms/', RoomView.as_view()),
    path('booking/', CreateBooking.as_view()),  
    path('get-room/', GetRoom.as_view())
]
