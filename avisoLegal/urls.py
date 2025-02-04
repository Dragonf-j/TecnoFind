from django.urls import path
from . import views

urlpatterns = [
    path('avisoLegal/',  views.avisoLegal , name="allLaptops"),

]