from django.db import models

# Create your models here.
class EmployeeModel(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    occupation = models.CharField(max_length=100)
    salary = models.IntegerField()
    gender = models.CharField(max_length=1)

    class Meta:
        db_table = "employees" 
#