from django.db import models
from django.contrib.auth.models import User

from django_extensions.db.models import TimeStampedModel


class Fast(TimeStampedModel):
    """ Stores fasts
    """

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='fasts')
    start = models.DateTimeField(null=False)
    end = models.DateTimeField(null=False)

    def __str__(self):
        return self.user.username

    def __unicode__(self):
        return self.user.username
