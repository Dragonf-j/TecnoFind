from django.shortcuts import render

# Create your views here.
def allheadphones(request):
    return render(request,'headphones/allheadphones.html')
def formheadphones(request):
    return render(request,'headphones/formheadphones.html')