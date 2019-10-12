from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView
from django.shortcuts import render

class HomePageView(TemplateView):
    template_name = 'home.html'

class HelpPageView(TemplateView):
    template_name = 'help.html'

class MainPageView(LoginRequiredMixin, TemplateView):
    template_name = 'main.html'

class AboutPageView(TemplateView):
    template_name = 'about.html'

class SettingsPageView(LoginRequiredMixin, TemplateView):
    template_name = 'settings.html'

def terms_and_conditions(request):
    return render(request, 'terms_and_conditions.html')

def privacy_policy(request):
    return render(request, 'privacy_policy.html')
