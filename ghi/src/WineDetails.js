import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetWineDetailsQuery } from './store/salesApi';
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, updateQuantityFromDetailsPage } from './store/cartReducer';
// import ErrorNotification from './ErrorNotification'
function GetWine() {
  let { id, winevo_id } = useParams();
  const {data, isLoading} = useGetWineDetailsQuery({id, winevo_id});
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  if (isLoading) {
    return (
      <progress className="progress is-primary" max="100"></progress>
      );
    }
    
    // if (data.quantity === 0) {
    //   redirect to Wine List Page
    // }
  async function checkAndSetQuantity(e){
    if(parseInt(e.target.value) < 1 || isNaN(parseInt(e.target.value))){
        e.target.value = 1;
    }
    if(parseInt(e.target.value) > parseInt(e.target.max)){
      e.target.value = e.target.max;
    }
      setQuantity(parseInt(e.target.value))
    }
  
  async function addToShoppingCart(){
    let item_exists = false
    let index = null
    const dataCopy = {...data};
    console.log("copy of data", dataCopy)
    dataCopy.cust_quantity = quantity;
    let wine_id = dataCopy.id
    for (let i=0; i < cartItems.length; i++) {
      if (wine_id === cartItems[i].id) {
          item_exists = true
          index = i
      } 
    }
    if (item_exists) {
      dispatch(updateQuantityFromDetailsPage({"index": index, "add_cust_quantity": quantity}))
    } else {
      dispatch(addCartItem(dataCopy))
      // console.log(cartItems)
    }
  }
  return (
    <div className="container-fluid">
        <div className="card mx-auto col-md-3 col-10 mt-5">
            <img
            className="mx-auto img-thumbnail"
            src={data.picture_url}
            height={300}
            />
            <div className="card-body text-center mx-auto">
                <div className="cvp">
                    <h5 className="card-title font-weight-bold">{ data.brand } { data.year }</h5>
                    <h6>{ data.varietal }, { data.region }</h6>
                    <p>ABV: { data.abv }%,  Volume: { data.volume } mL </p>
                    <p className="card-text">Price: ${ data.price }</p>
                    <p>{ data.description }</p>
                    <p>Quantity: { data.quantity }</p>
                    <input onChange = { checkAndSetQuantity } type="text" id="quantity" name="quantity" className="form-control input-number" value={ quantity } min="1" max={ data.quantity } />
                    <button onClick = { addToShoppingCart } href="#" className="btn btn-info btn-lg">
                      <span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};
export default GetWine;