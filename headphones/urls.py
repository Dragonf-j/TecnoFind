from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.allheadphones ,name="allheadphones"),
    path('formulario/', views.formheadphones ,name="formheadphones")
]