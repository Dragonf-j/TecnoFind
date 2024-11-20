from django.shortcuts import render

# Create your views here.
def allMonitor(request):
    return render(request,"monitor/allmonitor.html")

def formMonitor(request):
    return render(request,"monitor/formMonitor.html")