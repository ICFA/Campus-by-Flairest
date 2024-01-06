from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.validators import RegexValidator

class LogMessage(models.Model):
    message = models.CharField(max_length=300)
    log_date = models.DateTimeField("date logged")

    def __str__(self):
        """Returns a string representation of a message."""
        date = timezone.localtime(self.log_date)
        return f"'{self.message}' logged on {date.strftime('%A, %d %B, %Y at %X')}"


class NewUserAccountManager(BaseUserManager):

    def create_superuser(self, username, email, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
      
        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff=True')
       
        if other_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must be assigned to is_superuser=True')
        user =  self.create_user(username, email, password, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def create_user(self, username, email, password, **other_fields):
        if not email:
            raise ValueError('Email address is required!')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, password= "", **other_fields)
        user.set_unusable_password()
        user.save()

        return user


class NewUser(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(unique=True)
    # phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Please enter a valid phone number")
    # phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    objects = NewUserAccountManager()
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email


class University(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='uni/')
    about = models.CharField(max_length=2000)
    contacts = models.CharField(max_length=300)

    def __str__(self):
        return self.name


class Institute(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='inst/')
    about = models.CharField(max_length=1000)
    special = models.CharField(max_length=1000)
    contacts = models.CharField(max_length=300)

    def __str__(self):
        return self.name


class Specialty(models.Model):
    name = models.CharField(max_length=100)
    info = models.CharField(max_length=300)
    about = models.CharField(max_length=2000)
    special = models.CharField(max_length=1000)
    detail = models.CharField(max_length=1000)
    passing_score_free = models.CharField(max_length=100)
    passing_score_paid = models.CharField(max_length=100)
    discipline = models.CharField(max_length=2000)

    def __str__(self):
        return self.name


class Review(models.Model):
    author = models.CharField(max_length=100)
    specialty = models.CharField(max_length=100)
    review = models.CharField(max_length=1000)
    date = models.DateTimeField()

    def __str__(self):
        return self.review