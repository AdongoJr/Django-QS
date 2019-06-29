from django.urls import path
from .views import HomePageView, HelpPageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('help/', HelpPageView.as_view(), name='help'),
]




