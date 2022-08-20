## Create a new wine

* **Method**: `POST`
* **Path**: /winery/inventory

Input:

```json
{
  "brand": string,
  "year": int,
  "varietal": string,
  "description": text NULL,
  "region": str NULL,
  "abv": float,
  "volume": int,
  "city_state": char NULL,
  "price": float,
  "picture": url NULL,
  "quantity": int,
  "winery_id": FK,
}
```

Output:

```json
{
  "id": int,
  "brand": string,
  "year": int,
  "varietal": string,
  "description": text NULL,
  "region": str NULL,
  "abv": float,
  "volume": int,
  "city_state": char NULL,
  "price": float,
  "picture": url NULL,
  "quantity": int,
  "winery_id": FK,
}
```



## Create a new Shopping Item

* **Method**: `POST`
* **Path**: /sales/sales_rest

Input:

```json
{
  "user_id": FK,
  "order_id": MtO,
  "item": FK to wine,
  "quantity": int,
  "price": float,
  "active": bool,
}
```

Output:

```json
{
  "id": int,
  "user_id": FK,
  "order_id": MtO,
  "item": FK to wine,
  "quantity": int,
  "price": float,
  "active": bool,
}
```


## Create a new Order

* **Method**: `POST`
* **Path**: /sales/sales_rest

Input:

```json
{
  "confirmation_num": int,
  "created": datetime,
  "item": OtM,
}
```

Output:

```json
{
  "id": int,
  "confirmation_num": int,
  "created": datetime,
  "item": OtM,
}
```


