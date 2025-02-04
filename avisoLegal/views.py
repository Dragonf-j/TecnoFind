from django.shortcuts import render

# Create your views here.
def avisoLegal(request):
    return render(request,'avisoLegal/avisoLegal.html')