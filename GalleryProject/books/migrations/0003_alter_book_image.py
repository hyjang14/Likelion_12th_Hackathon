# Generated by Django 5.0.7 on 2024-07-25 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0002_alter_book_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='image',
            field=models.ImageField(blank=True, default='books_photo/book_default.png', upload_to='books_photo', verbose_name='이미지'),
        ),
    ]