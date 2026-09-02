from django.db import models


class Program(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(
        upload_to='programs/'
    )
    description = models.TextField()
    benefits = models.TextField()
    duration = models.CharField(max_length=100)

    def __str__(self):
        return self.name