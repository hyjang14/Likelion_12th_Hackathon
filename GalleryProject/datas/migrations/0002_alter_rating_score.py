# Generated by Django 4.2.13 on 2024-08-02 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datas', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rating',
            name='score',
            field=models.FloatField(default=0.0),
        ),
    ]
