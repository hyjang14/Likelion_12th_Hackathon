# Generated by Django 5.0.7 on 2024-07-30 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0008_alter_book_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='title',
            field=models.CharField(max_length=30, verbose_name='제목'),
        ),
    ]