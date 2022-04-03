

from django.contrib.auth.management.commands import createsuperuser


class Command(createsuperuser.Command):

    def handle(self, *args, **options):
        self.stdout.write("Create superuser")
        options.setdefault("intaractive", False)
        superuser = {
            "username":  "admin",
            "email": "admin1@abc.com",
            "password":  "adminpass",
        }
        database = options.get('database')

        exists = self.UserModel._default_manager.db_manager(
            database).filter(username=superuser["username"]).exists()
        if not exists:
            self.UserModel._default_manager.db_manager(
                database).create_superuser(**superuser)

        self.stdout.write("Finish creating superuser")
