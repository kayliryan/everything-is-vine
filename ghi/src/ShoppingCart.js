import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, clearCart, updateQuantityFromShoppingCart } from './store/cartReducer';
import { useState, useEffect } from 'react';



function ShoppingCartTest(){
  const { cartItems } = useSelector((state) => state.cart);
  const [cust_quantity, setCustQuantity] = useState(-1)
  const [index_state, setIndex] = useState(-1)
  const [firstRender, hasRendered] = useState(true)
  const dispatch = useDispatch();


  async function deleteItem(e, index=index) {
    dispatch(deleteCartItem({"index": index}))
    }


  async function checkAndSetQuantity(e, index=index){
      // bug to fix: unable to change quantity input in front end without highlighting number
      if(parseInt(e.target.value) < 1 || isNaN(parseInt(e.target.value))){
        e.target.value = 1;
      }
      if(parseInt(e.target.value) > parseInt(e.target.max)){
        e.target.value = e.target.max;
      }
      setCustQuantity(parseInt(e.target.value))
      setIndex(index)
    }

  async function orderPlaced(e) {
    dispatch(clearCart())
  }


  useEffect(() => {
    if (firstRender === true) {
      hasRendered(false)
    } 
    else {
    let data = {"cust_quantity": cust_quantity, "index": index_state}
    dispatch(updateQuantityFromShoppingCart(data)) 
    }
  }, [cust_quantity, index_state]);




  return(
      <>
      
          <table className="table table-hover">
              <thead>
                  <tr>
                  <th>Shopping Cart</th>
                  <th>Wine</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th>Delete</th>
                  </tr>
              </thead>
              <tbody className="table-group-divider">
                      {cartItems.map((cartItem, index) => {
                      return (
                          <tr key={ cartItem.id }>
                            <td><img
                          className="mx-auto img-thumbnail"
                          src={ cartItem.picture_url }/></td>
                            <td>Index {index}</td>
                            <td>{cartItem.year} {cartItem.brand} {cartItem.varietal}</td>
                            <td>${cartItem.price} </td>
                            <td> ${cartItem.cust_quantity * cartItem.price}</td>
                            <td> <input onChange = {e => checkAndSetQuantity(e,index)} type="text" id={index} name="quantity" className="form-control input-number" value={cartItem.cust_quantity} min="1" max={cartItem.quantity} /> </td>
                            <td> <button onClick = {e => deleteItem(e,index)} type="button" className="btn btn-primary"><span className="bi bi-trash"></span> Delete</button> </td>
                            <td> <button onClick = {orderPlaced} type="button" className="btn btn-primary"><span className="bi bi-trash"></span> Clear Cart</button> </td>
                              {/* <td> { currentDataObj.item.year/brand/varietal } </td>
                              <td> { currentDataObj.item.cust_quantity } </td>
                              // input element?: put cust_quantity as the placeholder?
                              // buttons to increment up and down? left and right?
                              <td> { dataObj.item.price } </td> */}
                            </tr>
                      );
                  })}
              </tbody>
          </table>            
      </>
  )
  };

export default ShoppingCartTest;

