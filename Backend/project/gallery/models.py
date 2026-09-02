from django.db import models




class Gallery(models.Model):

    image = models.ImageField(upload_to='gallery/')
    title = models.CharField(max_length=100,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title or "Gym Image"