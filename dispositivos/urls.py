from django.urls import path
from dispositivos import views

app_name = 'dispositivos'

urlpatterns = [
    # Formulario para cada dispositivo
    path('portatiles/formulario/', views.formulario_portatil, name='formulario_portatil'),
    path('moviles/formulario/', views.formulario_movil, name='formulario_movil'),
    path('tablets/formulario/', views.formulario_tablet, name='formulario_tablet'),
    path('ratones/formulario/', views.formulario_raton, name='formulario_raton'),
    path('auriculares/formulario/', views.formulario_auricular, name='formulario_auricular'),
    path('teclados/formulario/', views.formulario_teclado, name='formulario_teclado'),
    path('monitores/formulario/', views.formulario_monitor, name='formulario_monitor'),

    # Listar todos los dispositivos (un único view dinámico)
    path('<str:tipo>/todos/', views.listar_dispositivos_por_tipo, name='listar_dispositivos'),

    # Resultado de formulario
    path('resultado/', views.resultado_dispositivo, name='resultado_dispositivo'),
]
