# Generated by Django 4.0.3 on 2022-08-22 23:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Winery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=254)),
                ('url', models.URLField(max_length=220, null=True)),
                ('address', models.CharField(max_length=254)),
                ('description', models.TextField()),
                ('owner', models.CharField(max_length=110, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Wine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.CharField(max_length=110)),
                ('year', models.SmallIntegerField()),
                ('varietal', models.CharField(max_length=110)),
                ('description', models.TextField(null=True)),
                ('region', models.CharField(max_length=110, null=True)),
                ('abv', models.FloatField()),
                ('volume', models.SmallIntegerField()),
                ('city_state', models.CharField(max_length=110, null=True)),
                ('price', models.FloatField()),
                ('picture_url', models.URLField(max_length=220, null=True)),
                ('quantity', models.SmallIntegerField()),
                ('winery_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='wines', to='inventory.winery')),
            ],
        ),
    ]
