from rest_framework.viewsets import ModelViewSet

from .models import Fast
from .serializers import FastSerializer


class FastViewSet(ModelViewSet):
    """ View for Fast """

    queryset = Fast.objects.all()
    serializer_class = FastSerializer
