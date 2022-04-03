from rest_framework import generics, status, viewsets
from rest_framework.exceptions import ValidationError
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from users.models import CustomUser

from blog.api.permissions import IsAuthorOrReadOnly
from blog.api.serializers import ArticleSerializer, CommentSerializer
from blog.models import Article, Comment


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all().order_by("-created_at")
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticated, IsAuthorOrReadOnly]
    lookup_field = "slug"

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class AuthorArticleAPIView(generics.ListAPIView):
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticated, IsAuthorOrReadOnly]
    lookup_field = "author"

    def get_queryset(self):
        author = self.kwargs["author"]
        user = CustomUser.objects.filter(username=author).first()
        articles = Article.objects.filter(
            author=user.id).order_by("-created_at")
        return articles


class CommentCreateAPIView(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        request_user = self.request.user
        kwarg_slug = self.kwargs.get("slug")
        article = get_object_or_404(Article, slug=kwarg_slug)

        if article.comments.filter(author=request_user).exists():
            raise ValidationError("You have already commented this article!")
        serializer.save(author=request_user, article=article)


class CommentRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated, IsAuthorOrReadOnly]
    lookup_field = "uuid"


class CommentListAPIView(generics.ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        kwargs_slug = self.kwargs.get("slug")
        return Comment.objects.filter(article__slug=kwargs_slug).order_by("-created_at")


class CommentLikeAPIView(APIView):
    serializer_class = CommentSerializer
    permisson_classes = [IsAuthenticated]
    lookup_field = "uuid"

    def post(self, request, uuid):
        comment = get_object_or_404(Comment, uuid=uuid)
        comment.voters.add(request.user)
        comment.save()

        serializer_context = {"request": request}
        serializer = self.serializer_class(comment, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, uuid):
        comment = get_object_or_404(Comment, uuid=uuid)
        comment.voters.remove(request.user)
        comment.save()

        # これをしないとエラーになる
        serializer_context = {"request": request}
        serializer = self.serializer_class(comment, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)
