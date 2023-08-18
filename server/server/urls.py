from django.contrib import admin
from django.urls import path
from api.views import index
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('api/get-plots/', index),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
