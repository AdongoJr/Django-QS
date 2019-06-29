from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = 'home.html'

class HelpPageView(TemplateView):
    template_name = 'help.html'

class AboutPageView(TemplateView):
    template_name = 'about.html'
