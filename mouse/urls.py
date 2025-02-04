from django.urls import path
from . import views


urlpatterns = [
    path('todos/', views.allmouse ,name="allmouse"),
    path('formulario/', views.formmouse ,name="formmouse")
]