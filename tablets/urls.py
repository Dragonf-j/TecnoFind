from django.urls import path
from . import views


urlpatterns = [
    path('todos/', views.alltablets ,name="alltablets"),
    path('formulario/', views.formtablets ,name="formtablets")
]