from django import forms
from .models import LogMessage, University, Specialty, Review

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
        model = Specialty
        fields = '__all__'

class RevForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = '__all__'