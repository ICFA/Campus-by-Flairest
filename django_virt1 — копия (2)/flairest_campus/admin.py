from django.contrib import admin
from .models import NewUser, University, Institute, Specialty, Review

admin.site.register(NewUser)
admin.site.register(University)
admin.site.register(Institute)
admin.site.register(Specialty)
admin.site.register(Review)
