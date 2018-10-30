from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Fast


class FastSerializer(serializers.ModelSerializer):
    """ Serializer for Fast model """
    start = serializers.DateTimeField(format="%Y-%m-%d %H:%M")
    end = serializers.DateTimeField(format="%Y-%m-%d %H:%M")

    class Meta:
        model = Fast
        fields = '__all__'
