from django.shortcuts import render

# Create your views here.
def allphones(request):
    return render(request,'phone/allphone.html')

def formphones(request):
    return render(request,'phone/formPhone.html')