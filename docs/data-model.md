## User (winery/accounts)

|Name           |Type    |Unique    |Optional   |
|-              |-       |-         |-          |
| name          | string | no       | no        |
| address       | string | no       | no        |
| phone         | string | no       | no        |
| email         | string | yes      | yes       |
| winery        | FK     | no       | yes       |
| employee      | bool   | no       | no        |


## Winery (winery/inventory)

|Name           |Type    |Unique    |Optional   |
|-              |-       |-         |-          |
| name          | string | no       | no        |
| url           | url    | no       | yes       |
| address       | string | no       | no        |
| description   | text   | no       | no        |
| owner         | string | no       | yes       |

## Wine (winery/inventory)

|Name           |Type    |Unique    |Optional   |
|-              |-       |-         |-          |
| winery_id     | FK     |-         |-          |
| brand         | string | no       | no        |
| year          | int    | no       | no        |
| varietal      | string | no       | no        |
| description   | text   | no       | yes       |
| region        | string | no       | yes       |
| abv           | float  | no       | no        |
| volume        | int    | no       | no        |
| city_state    | char   | no       | yes       |
| price         | float  | no       | no        |
| picture_url   | url    | no       | yes       |
| quantity      | int    | no       | no        |

## Wine Value Object (sales/sales_rest)

|Name           |Type    |Unique    |Optional   |
|-              |-       |-         |-          |
| winery_id     | FK     |-         |-          |
| brand         | string | no       | no        |
| year          | int    | no       | no        |
| varietal      | string | no       | no        |
| description   | text   | no       | yes       |
| region        | string | no       | yes       |
| abv           | float  | no       | no        |
| volume        | int    | no       | no        |
| city_state    | char   | no       | yes       |
| price         | float  | no       | no        |
| picture_url   | url    | no       | yes       |
| quantity      | int    | no       | no        |
| import_href   | string | yes      | no        |

## Order (sales/sales_rest)

|Name                  |Type      |Unique    |Optional   |
|-                     |-         |-         |-          |
| confirmation_number  | string   | yes      | no        |
| created              | datetime | no       | no        |
| first_name           | string   | no       | no        |
| last_name            | string   | no       | no        |
| address_one          | string   | no       | no        |
| address_two          | string   | no       | yes       |
| city                 | string   | no       | no        |
| state                | string   | no       | no        |
| zip_code             | string   | no       | no        |
| country              | string   | no       | no        |
| card_name            | string   | no       | no        |
| last_four            | string   | no       | no        |
| exp_date             | string   | no       | no        |
| discount_ten         | bool     | no       | no        |
| account_email        | string   | no       | yes       |

## Shopping Item (sales/sales_rest)

|Name           |Type    |Unique    |Optional   |
|-              |-       |-         |-          |
| order_id      | FK     |-         |-          |
| item          | FK     |-         |-          |
| quantity      | int    | no       | no        |
| price         | float  | no       | no        |
