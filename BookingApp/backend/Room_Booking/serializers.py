from rest_framework import serializers
from .models import Room,RoomImage ,OccupiedDate 
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from .models import User


class RoomImageSerializer(serializers.ModelSerializer):
    room = serializers.HyperlinkedRelatedField(
        view_name = 'room-detail',
        queryset = Room.objects.all()
    )

    class Meta:
        model = RoomImage
        fields = ['id','image','caption','room']

class OccupiedDateSerializer(serializers.HyperlinkedModelSerializer):
    serializers.HyperlinkedRelatedField(
        view_name = 'room-detail',
        queryset = Room.objects.all()
    )
    user = serializers.HyperlinkedRelatedField(
        view_name = "user_detail",
        queryset =User.objects.all()
    )
    class Meta: 
        model = OccupiedDate
        fields = ['url','id','room','date','user']
         

class RoomSerializer(serializers.HyperlinkedModelSerializer):  
    images = RoomImageSerializer(many=True,read_only=True)
    occupiedDates = OccupiedDateSerializer(many=True,read_only=True)
    class Meta:
        model = Room
        fields = ['id', 'name', 'type', 'pricePerNight', 'currency', 'maxOccupancy', 'description', 'images','occupiedDates']



   
    
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'password', 'email', 'full_name']
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop("password", None)
        if password:
            instance.set_password(password)  # ensures rehash
        return super().update(instance, validated_data)
