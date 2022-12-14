from django.db import models

# Create your models here.
class Candidate(models.Model):

    choices = [
        ("Accepted", "Accepted"),
        ("Applied", "Applied"),
        ("Rejected", "Rejected"),
    ]

    name = models.CharField(max_length=200, null=False)
    email = models.EmailField(primary_key=True, null=False)
    contact = models.PositiveIntegerField(null=False)

    # education details
    ssc = models.FloatField(null=False)
    hsc = models.FloatField(null=False)
    degree = models.FloatField(null=False)
    
    # work experience
    workexp = models.IntegerField(null=False)

    # status
    status = models.CharField(max_length=100, choices=choices, null=False, default="Applied")

    resume = models.FileField(upload_to="resume", null=True)
    resume_name = models.CharField(max_length=100, null=True)

    def _str_(self):
        return self.name + "_" + self.email