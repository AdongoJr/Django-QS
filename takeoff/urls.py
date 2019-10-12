from django.urls import path
from . import views

urlpatterns = [
    path('',views.HomePageView.as_view(), name='home'),
    path('help/', views.HelpPageView.as_view(), name='help'),
    path('main/', views.MainPageView.as_view(), name='main'),
    path('about/', views.AboutPageView.as_view(), name='about'),
    # path('settings/', views.SettingsPageView.as_view(), name='settings'),
    path('terms_and_conditions/', views.terms_and_conditions, name='t_and_c' ),
    path('privacy_policy/', views.privacy_policy, name='p_p'),
]




