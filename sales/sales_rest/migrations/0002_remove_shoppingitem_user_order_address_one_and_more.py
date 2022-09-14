# Generated by Django 4.0.3 on 2022-09-12 23:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shoppingitem',
            name='user',
        ),
        migrations.AddField(
            model_name='order',
            name='address_one',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='address_two',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='card_name',
            field=models.CharField(default='', max_length=150),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='city',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='country',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='discount_ten',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='exp_date',
            field=models.CharField(default='', max_length=5),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='first_name',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='last_four',
            field=models.CharField(default='', max_length=4),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='last_name',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='state',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='orders', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='order',
            name='zip_code',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
    ]
