from rest_framework import serializers

from blog.models import Article, Comment


class ArticleSerializer(serializers.ModelSerializer):

    author = serializers.StringRelatedField()
    created_at = serializers.SerializerMethodField()
    slug = serializers.SlugField(read_only=True)
    comments_count = serializers.SerializerMethodField()
    user_has_commented = serializers.SerializerMethodField()

    class Meta:
        model = Article
        exclude = ["id", "updated_at"]

    def get_created_at(self, instance):
        return instance.created_at.strftime("%B %d %Y")

    def get_comments_count(self, instance):
        return instance.comments.count()

    def get_user_has_commented(self, instance):
        request = self.context.get("request")
        return instance.comments.filter(author=request.user).exists()


class CommentSerializer(serializers.ModelSerializer):

    author = serializers.StringRelatedField()
    created_at = serializers.SerializerMethodField()
    likes_count = serializers.SerializerMethodField()
    user_has_liked_comment = serializers.SerializerMethodField()
    article_slug = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        exclude = ["article", "voters", "updated_at"]

    def get_created_at(self, instance):
        return instance.created_at.strftime("%B %d %Y")

    def get_likes_count(self, instance):
        return instance.voters.count()

    def get_user_has_liked_comment(self, instance):
        request = self.context.get("request")
        return instance.voters.filter(pk=request.user.pk).exists()

    def get_article_slug(self, instance):
        return instance.article.slug
