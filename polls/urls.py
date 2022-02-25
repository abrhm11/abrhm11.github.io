from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/34/
    path('', views.index, name='index'),
    # ex: /polls/roll/
    path('roll/', views.roll_dice, name='roll_dice'),
    # ex: /polls/my_room
    path('<str:room_name>/', views.room, name='room'),
]