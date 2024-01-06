import re
from django.utils.timezone import datetime
from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import redirect
from flairest_campus.forms import LogMessageForm
from flairest_campus.models import LogMessage
from django.views.generic import ListView
from .models import NewUser, University, Institute, Specialty, Review
from django.core.files.storage import FileSystemStorage
from django.views.generic import CreateView
from .forms import UniForm


def home_page(request):
    # POST - обязательный метод
    if request.method == 'POST' and request.FILES:
        # получаем загруженный файл
        file = request.FILES['myfile1']
        fs = FileSystemStorage()
        # сохраняем на файловой системе
        filename = fs.save(file.name, file)
        # получение адреса по которому лежит файл
        file_url = fs.url(filename)
        return render(request, 'flairest_campus/index.html', {
            'file_url': file_url
        })
    return render(request, 'flairest_campus/index.html')

'''
class HomeListView(ListView):
    """Renders the home page, with a list of all messages."""
    model = LogMessage

    def get_context_data(self, **kwargs):
        context = super(HomeListView, self).get_context_data(**kwargs)
        return context

class UniCreate(CreateView):
    # Модель куда выполняется сохранение
    model = University
    # Класс на основе которого будет валидация полей
    form_class = UniForm
    # Выведем все существующие записи на странице
    extra_context = {'universities': University.objects.all()}
    # Шаблон с помощью которого
    # будут выводиться данные
    template_name = 'flairest_campus/uni_create.html'
    # На какую страницу будет перенаправление
    # в случае успешного сохранения формы
    success_url = '/uni/'


def home_page(request):
    # POST - обязательный метод
    if request.method == 'POST' and request.FILES:
        # получаем загруженный файл
        file = request.FILES['myfile1']
        fs = FileSystemStorage()
        # сохраняем на файловой системе
        filename = fs.save(file.name, file)
        # получение адреса по которому лежит файл
        file_url = fs.url(filename)
        return render(request, 'flairest_campus/home_page.html', {
            'file_url': file_url
        })
    return render(request, 'flairest_campus/home_page.html')

def about(request):
    return render(request, "flairest_campus/about.html")

def contact(request):
    return render(request, "flairest_campus/contact.html")

def log_message(request):
    form = LogMessageForm(request.POST or None)

    if request.method == "POST":
        if form.is_valid():
            message = form.save(commit=False)
            message.log_date = datetime.now()
            message.save()
            return redirect("home")
    else:
        return render(request, "flairest_campus/log_message.html", {"form": form})

def hello_there(request, name):
    print(request.build_absolute_uri()) #optional
    return render(
        request,
        'flairest_campus/hello_world.html',
        {
            'name': name,
            'date': datetime.now()
        }
    )
'''