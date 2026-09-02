
from django.db import models


class Trainer(models.Model):

    name = models.CharField(max_length=100)

    image = models.ImageField(
        upload_to='trainers/'
    )

    specialization = models.CharField(
        max_length=150
    )

    experience = models.PositiveIntegerField(
        help_text="Experience in years"
    )

    description = models.TextField()

    def __str__(self):
        return self.name