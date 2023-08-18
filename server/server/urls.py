from django.contrib import admin
from django.urls import path
from api.views import index
from api.views import benchmark
from api.views import generate_charts
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('api/get-plots/', index),
    path('api/benchmark/', benchmark),
    path('api/generate-charts/', generate_charts),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
