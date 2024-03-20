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
from .forms import UniForm, SpecForm

'''
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

def home_page(request):
    return render(request, 'flairest_campus/hello_page.html')


class UniCatalog(CreateView):
    # Модель куда выполняется сохранение
    model = University
    # Класс на основе которого будет валидация полей
    form_class = UniForm
    # Выведем все существующие записи на странице
    extra_context = {'universities': University.objects.all()}
    # Шаблон с помощью которого
    # будут выводиться данные
    template_name = 'flairest_campus/index2.html'

def UniCatalog1(request):
    uni = University.objects.all()
    direct = Specialty.objects.all()
    return render(
        request,
        'flairest_campus/index2.html',
        {
            'universities': uni,
            'directions': direct
        }
    )

class UniAdd(CreateView):
    # Модель куда выполняется сохранение
    model = University
    # Класс на основе которого будет валидация полей
    form_class = UniForm
    # Шаблон с помощью которого
    # будут выводиться данные
    template_name = 'flairest_campus/university_add.html'
    # На какую страницу будет перенаправление
    # в случае успешного сохранения формы
    success_url = '/catalog/'

class SpecAdd(CreateView):
    # Модель куда выполняется сохранение
    model = Specialty
    # Класс на основе которого будет валидация полей
    form_class = SpecForm
    # Шаблон с помощью которого
    # будут выводиться данные
    template_name = 'flairest_campus/direction_add.html'
    # На какую страницу будет перенаправление
    # в случае успешного сохранения формы
    success_url = '/catalog/'

def manage_universities1(request):
    FormSet = UniForm(fields="__all__")
    if request.method == "POST":
        formset = FormSet(
            request.POST,
            request.FILES,
        )
        if formset.is_valid():
            formset.save()
            # Do something.
    else:
        formset = FormSet()
    return render(request, "flairest_campus/university_add1.html", {"formset": formset})

def uni_detail(request, uni_id):
    uni = University.objects.get(id=uni_id)
    rev = Review.objects.all()
    return render(
        request,
        'flairest_campus/university.html',
        {
            'uni': uni,
            'rev': rev
        }
    )

def spec_detail(request, spec_id):
    spec = Specialty.objects.get(id=spec_id)
    return render(
        request,
        'flairest_campus/direction.html',
        {
            'spec': spec
        }
    )

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