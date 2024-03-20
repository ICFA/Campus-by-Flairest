from django import forms
from .models import LogMessage, University, Specialty

class LogMessageForm(forms.ModelForm):
    class Meta:
        model = LogMessage
        fields = ("message",)   # NOTE: the trailing comma is required

class UniForm(forms.ModelForm):
    class Meta:
        # Название модели на основе
        # которой создается форма
        model = University
        # Включаем все поля с модели в форму
        fields = '__all__'

class SpecForm(forms.ModelForm):
    class Meta:
        # Название модели на основе
        # которой создается форма
        model = Specialty
        # Включаем все поля с модели в форму
        fields = '__all__'