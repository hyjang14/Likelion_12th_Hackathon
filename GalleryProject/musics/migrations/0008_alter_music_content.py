# Generated by Django 5.0.7 on 2024-07-30 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('musics', '0007_music_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='music',
            name='content',
            field=models.TextField(max_length=700, verbose_name='내용'),
        ),
    ]