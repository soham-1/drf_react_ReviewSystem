from email import message
from lib2to3.pytree import Base
from rest_framework.permissions import BasePermission

class IsEmployer(BasePermission):
    message = "user is not a employer"

    def has_permission(self, request, view):
        return request.user.is_employer