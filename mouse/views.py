from django.shortcuts import render

# Create your views here.
def allmouse(request):
    return render(request,'mouse/allmouse.html')
def formmouse(request):
    return render(request,'mouse/formmouse.html')