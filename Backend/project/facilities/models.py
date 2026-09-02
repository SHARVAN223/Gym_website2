
from django.db import models


class Facility(models.Model):

    name = models.CharField(
        max_length=100
    )

    image = models.ImageField(
        upload_to='facilities/'
    )

    description = models.TextField()

    def __str__(self):
        return self.name