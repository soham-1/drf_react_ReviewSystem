from django.contrib.auth import get_user_model
User = get_user_model()

from rest_framework.generics import CreateAPIView


from .serializers import UserSerializer
# Create your views here.

class Register(CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = []