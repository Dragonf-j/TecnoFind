from django.shortcuts import render

# Create your views here.
def allkeyboards(request):
    return render(request,'keyboards/allkeyboards.html')
def formkeyboards(request):
    return render(request,'keyboards/formkeyboards.html')