# Generated by Django 5.0.7 on 2024-07-26 04:50

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('musics', '0004_alter_music_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='music',
            name='created_at2',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='작성일2'),
            preserve_default=False,
        ),
    ]