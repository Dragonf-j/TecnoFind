from django.urls import path
from . import views


urlpatterns = [
    path('todos/', views.allkeyboards ,name="allkeyboards"),
    path('formulario/', views.formkeyboards ,name="formkeyboards")
]