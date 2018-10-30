from rest_framework import routers

from .views import FastViewSet

router = routers.SimpleRouter()
router.register(r'fasts', FastViewSet)

urlpatterns = router.urls
