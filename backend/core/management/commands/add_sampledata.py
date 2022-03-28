import random

from django.core.management.base import BaseCommand

from blog.models import Article, Comment
from users.models import CustomUser


class Command(BaseCommand):

    users = [
        {"username": "user1", "email": "user1@abc.com", "password": "user1password"},
        {"username": "user2", "email": "user2@abc.com", "password": "user2password"},
        {"username": "user3", "email": "user3@abc.com", "password": "user3password"},
    ]

    articles = [
        {"title": "Dummy2", "body": "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! 'Now fax quiz Jack!' my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch 'Jeopardy!', Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just"},
        {"title": "Dummy1", "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"},
        {"title": "Beginner's Guide to Python",
            "body": "New to programming? Python is free and easy to learn if you know where to start! This guide will help you to get started quickly.\r\n\r\nChinese Translation\r\n\r\nNew to Python?\r\nRead BeginnersGuide/Overview for a short explanation of what Python is.\r\n\r\nGetting Python\r\nNext, install the Python 3 interpreter on your computer. This is the program that reads Python programs and carries out their instructions; you need it before you can do any Python programming. Mac and Linux distributions may include an outdated version of Python (Python 2), but you should install an updated one (Python 3). See BeginnersGuide/Download for instructions to download the correct version of Python.\r\n\r\nThere are also Python interpreter and IDE bundles available, such as Thonny. Other options can be found at IntegratedDevelopmentEnvironments.\r\n\r\nAt some stage, you'll want to edit and save your program code. Take a look at HowToEditPythonCode for some advice and recommendations."},
        {"title": "Django REST framework", "body": "Django REST framework is a powerful and flexible toolkit for building Web APIs.\r\n\r\nSome reasons you might want to use REST framework:\r\n\r\nThe Web browsable API is a huge usability win for your developers.\r\nAuthentication policies including packages for OAuth1a and OAuth2.\r\nSerialization that supports both ORM and non-ORM data sources.\r\nCustomizable all the way down - just use regular function-based views if you don't need the more powerful features.\r\nExtensive documentation, and great community support.\r\nUsed and trusted by internationally recognised companies including Mozilla, Red Hat, Heroku, and Eventbrite."},
        {"title": "What is Vue?",
            "body": "What is Vue?#\nVue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex."},
        {"title": "Ryosuke Maeda", "body": "My name is Ryosuke.\r\nHe is 29 years old and his favorite food is ramen.\r\nHe is currently working as an engineer.\r\nthank you!"},
    ]

    comments = [
        "comment1",
        "comment2",
        "comment3",
        "comment4",
        "comment5",
        "comment6",
        "comment7",
        "comment8",
        "comment9",
        "comment10",
    ]

    def get_any_user(self):
        users = list(CustomUser.objects.all())
        return random.choice(users)

    def get_any_article(self):
        articles = Article.objects.all()
        return random.choice(articles)

    def handle(self, *args, **options):
        try:
            self.stdout.write("Add sample data")
            # Add sample users
            if CustomUser.objects.count() <= 1:
                self.stdout.write("Add sample users")
                for user in self.users:
                    customuser = CustomUser()
                    customuser.username = user["username"]
                    customuser.email = user["email"]
                    customuser.set_password("user1password")
                    customuser.save()

            # Add sample articles
            if Article.objects.count() == 0:
                self.stdout.write("Add sample articles")
                for sample_article in self.articles:
                    article = Article()
                    article.author = self.get_any_user()
                    article.title = sample_article["title"]
                    article.body = sample_article["body"]
                    article.save()

            # Add sample comments
            if Comment.objects.count() == 0:
                self.stdout.write("Add sample comments")
                for sample_comment in self.comments:
                    comment = Comment()
                    comment.author = self.get_any_user()
                    comment.content = sample_comment
                    comment.article = self.get_any_article()
                    comment.save()

            self.stdout.write("Finish adding sample data")
        except Exception:
            import traceback
            print(traceback.print_exc())
