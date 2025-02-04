from django.shortcuts import render

# Create your views here.
def alllaptops(request):
    return render(request,"laptops/allLaptops.html")

def formLaptops(request):
    return render(request,"laptops/formLaptops.html")