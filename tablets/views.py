from django.shortcuts import render

# Create your views here.
def alltablets(request):
    return render(request,'tablets/alltablets.html')

def formtablets(request):
    return render(request,'tablets/formtablets.html')