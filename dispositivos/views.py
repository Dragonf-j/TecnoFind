from django.shortcuts import render

# Formulario de Portátiles
def formulario_portatil(request):
    return render(request, 'dispositivos/portatiles/formulario.html')

# Formulario de Móviles
def formulario_movil(request):
    return render(request, 'dispositivos/moviles/formulario.html')

# Formulario de Tablets
def formulario_tablet(request):
    return render(request, 'dispositivos/tablets/formulario.html')

# Formulario de Ratones
def formulario_raton(request):
    return render(request, 'dispositivos/ratones/formulario.html')

# Formulario de Auriculares
def formulario_auricular(request):
    return render(request, 'dispositivos/auriculares/formulario.html')

# Formulario de Teclados
def formulario_teclado(request):
    return render(request, 'dispositivos/teclados/formulario.html')

# Formulario de Monitores
def formulario_monitor(request):
    return render(request, 'dispositivos/monitores/formulario.html')

# Listar todos los dispositivos (dinámico según tipo)
def listar_dispositivos_por_tipo(request, tipo):
    return render(request, 'dispositivos/listar_todos.html', {'tipo': tipo})

# Resultado de formulario
def resultado_dispositivo(request):
    return render(request, 'dispositivos/resultado.html')

