from django.db import models

from django.conf import settings


class MembershipPlan(models.Model):

    name = models.CharField(max_length=100)

    duration = models.CharField(max_length=50)

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    description = models.TextField()

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    

class UserMembership(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    plan = models.ForeignKey(
        MembershipPlan,
        on_delete=models.CASCADE
    )

    status = models.CharField(
        max_length=20,
        default='pending'
    )

    start_date = models.DateField(
        null=True,
        blank=True
    )

    end_date = models.DateField(
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.user.name} - {self.plan.name}"