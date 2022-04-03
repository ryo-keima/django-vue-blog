import uuid as uuid_lib

from django.conf import settings
from django.db import models

from core.models import TimeStampedModel


class Article(TimeStampedModel):
    uuid = models.UUIDField(default=uuid_lib.uuid4, editable=False)
    title = models.CharField(max_length=50)
    body = models.TextField()
    slug = models.SlugField(max_length=255, unique=True)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="articles"
    )

    def __str__(self):
        return self.title


class Comment(TimeStampedModel):
    uuid = models.UUIDField(
        db_index=True, default=uuid_lib.uuid4, editable=False)
    content = models.CharField(max_length=250)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name="comments")
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="comments"
    )
    voters = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name="likes")

    def __str__(self):
        return self.author.username
