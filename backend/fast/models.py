from django.db import models
from django.contrib.auth.models import User


class Fast(models.Model):
    """ Stores fasts
    """

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='fasts')

    def __str__(self):
        return self.user.username

    def __unicode__(self):
        return self.user.username
