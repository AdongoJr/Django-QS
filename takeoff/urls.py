from django.urls import path
from .views import HomePageView, HelpPageView, MainPageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('help/', HelpPageView.as_view(), name='help'),
    path('main/', MainPageView.as_view(), name='main'),
]




