## Wine

| Name | Type | Unique | Optional |
|-|-|-|-|
| brand | string | no | no |
| year | int | no | no |
| varietal | string | no | no |
| description | text | no | yes |
| region | string | no | yes |
| abv | float | no | no |
| volume | int | no | no |
| city_state | char | no | yes |
| price | float | no | no |
| picture_url | url | no | yes |
| quantity | int | no | no |
| winery_id | FK |


## Shopping Item

| Name | Type | Unique | Optional |
|-|-|-|-|
| user_id | FK |
| order_id | MtO | 
| item | FK |
| quantity | int | no | no |
| price | float | no | no |
| active | bool | no | no |


## Order

| Name | Type | Unique | Optional |
|-|-|-|-|
| confirmation_num | int | no | no |
| created | datetime | no | no |
| item | OtM |
