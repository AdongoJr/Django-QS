from django.urls import path
from .views import HomePageView, HelpPageView, AboutPageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('help/', HelpPageView.as_view(), name='help'),
    path('about/', AboutPageView.as_view(), name='about'),
]




