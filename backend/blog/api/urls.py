from django.urls import include, path
from rest_framework.routers import DefaultRouter

from blog.api import views as blog_views

router = DefaultRouter()
router.register(r"articles", blog_views.ArticleViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("articles/author/<str:author>/",
         blog_views.AuthorArticleAPIView.as_view(), name="author-articles"),
    path("articles/<slug:slug>/comments/",
         blog_views.CommentListAPIView.as_view(), name="comment-list"),
    path("articles/<slug:slug>/comment/",
         blog_views.CommentCreateAPIView.as_view(), name="comment-create"),
    path("comments/<uuid:uuid>/",
         blog_views.CommentRUDAPIView.as_view(), name="comment-detail"),
    path("comments/<uuid:uuid>/like/",
         blog_views.CommentLikeAPIView.as_view(), name="comment-like"),
]
