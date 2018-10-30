from rest_framework.serializers import ModelSerializer

from .models import Fast


class FastSerializer(ModelSerializer):
    """ Serializer for Fast model """

    class Meta:
        model = Fast
        fields = '__all__'
