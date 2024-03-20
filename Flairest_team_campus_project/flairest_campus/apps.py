from django.apps import AppConfig


class FlairestCampusConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'flairest_campus'

    def ready(self):
        # everytime server restarts
        import flairest_campus.signal