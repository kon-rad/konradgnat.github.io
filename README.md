# konradgnat.github.io

Fullstack Web Developer Portfolio

# Django Backend Notes

Start venv with this command:
`source django/bin/activate`
make sure you cd into `/konradgnat/`

To run the django app on localhost:8080 run:
`python manage.py runserver`

After changes to models, run the migration
`python manage.py makemigrations`

`python manage.py migrate`

To collect all your static files from different apps to a single folder for production, run this:
`python manage.py collectstatic`
