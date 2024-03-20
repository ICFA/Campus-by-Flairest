from django.db.models.signals import post_save, pre_delete, pre_save
from django.dispatch import receiver


# this receiver is executed every-time some data is saved in any table
@receiver(pre_save)
def audit_log(sender, instance, **kwargs):
    # code to execute before every model save
    print("Inside signal code")