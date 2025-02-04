from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.alllaptops, name="allLaptops"),
    path('formulario/', views.formLaptops, name="formLaptops")

]