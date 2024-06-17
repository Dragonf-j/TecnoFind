from django.shortcuts import render
from django.views.generic.base import TemplateView

# Create your views here.



def HomeView(request):
    return render(request, "core/core.html")


