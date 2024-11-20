from django.urls import path
from . import views


urlpatterns = [
    path('todos/', views.allphones ,name="allphones"),
    path('formulario/', views.formphones ,name="formPhones")
]