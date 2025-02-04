from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.allMonitor, name="allMonitor"),
    path('formulario/', views.formMonitor, name="formMonitor")

]