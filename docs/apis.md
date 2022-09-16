## Create New User
* **Method**: `POST`
* **Path**: /winery/accounts

Input:

```JSON
{
  "name": str,
  "address": str,
  "phone": str,
  "email": email,
  "winery": Foreign Key,
  "employee": bool,
}
```

Output:

```JSON
{
  "id": int,
  "name": str,
  "address": str,
  "phone": str,
  "email": email,
  "winery": Foreign Key,
  "employee": bool,
}
```

## Create New Winery
* **Method**: `POST`
* **Path**: /winery/inventory

Input:

```JSON
{
  "name": str,
  "url": url,
  "address": str,
  "description": text,
  "owner": str, 
}
```

Output:

```JSON
{
  "id": int,
  "name": str,
  "url": url,
  "address": str,
  "description": text,
  "owner": str, 
}
```

## Create New Wine
* **Method**: `POST`
* **Path**: /winery/inventory

Input:

```JSON
{
  "winery_id": Foreign Key,
  "brand": string,
  "year": int,
  "varietal": string,
  "description": text,
  "region": str,
  "abv": float,
  "volume": int,
  "city_state": char,
  "price": float,
  "picture_url": url,
  "quantity": int,
}
```

Output:

```JSON
{
  "id": int, (Confirm)
  "winery_id": Foreign Key,
  "id": int,
  "brand": string,
  "year": int,
  "varietal": string,
  "description": text,
  "region": str,
  "abv": float,
  "volume": int,
  "city_state": char,
  "price": float,
  "picture_url": url,
  "quantity": int,
}
```

## Create Wine Value Object
* **Method**: `POST`
* **Path**: /sales/sales_rest

Input: 

```JSON
{
  "winery_id": int,
  "brand": str,
  "year": int, 
  "varietal": str, 
  "description": text, 
  "region": str,
  "abv": float, 
  "volume": int, 
  "city_state": str,
  "price": float,
  "picture_url": url, 
  "quantity": int,
  "import_href": str,
}
```

Output:

```JSON
{
  "id": int,
  "winery_id": int,
  "brand": str,
  "year": int, 
  "varietal": str, 
  "description": text, 
  "region": str,
  "abv": float, 
  "volume": int, 
  "city_state": str,
  "price": float,
  "picture_url": url, 
  "quantity": int,
  "import_href": str,
}
```

## Create New Order
* **Method**: `POST`
* **Path**: /sales/sales_rest

Input:

```JSON
{
    "confirmation_number": str,
    "created": datetime,
    "first_name": str,
    "last_name": str,
    "address_one": str,
    "address_two": str,
    "city": str,
    "state": str,
    "zip_code": str,
    "country": str,
    "card_name": str, 
    "last_four": str,
    "exp_date": str,
    "discount_ten": bool,
    "account_email": str,
}
```

Output:

```JSON
{
    "id": int,
    "confirmation_number": str,
    "created": datetime,
    "first_name": str,
    "last_name": str,
    "address_one": str,
    "address_two": str,
    "city": str,
    "state": str,
    "zip_code": str,
    "country": str,
    "card_name": str, 
    "last_four": str,
    "exp_date": str,
    "discount_ten": bool,
    "account_email": str,
}
```

## Create Shopping Item
* **Method**: `POST`
* **Path**: /sales/sales_rest

Input:

```JSON
{
  "order_id": Many To One,
  "item": Foreign Key to WineVO,
  "quantity": int,
  "price": float,
}
```

Output:

```JSON
{
  "id": int,
  "order_id": Many To One,
  "item": Foreign Key to WineVO,
  "quantity": int,
  "price": float,
}
```