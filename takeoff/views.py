from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = 'home.html'

class HelpPageView(TemplateView):
    template_name = 'help.html'

class MainPageView(LoginRequiredMixin, TemplateView):
    template_name = 'main.html'
