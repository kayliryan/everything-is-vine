import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from './store/cartReducer';
import { useState } from 'react';



function ShoppingCartTest(){
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cust_quantity, setCustQuantity] = useState(1)
  let data = null

  async function checkAndSetQuantity(e, index){
      // bug to fix: unable to change quantity input in front end without highlighting number
      if(parseInt(e.target.value) < 1 || isNaN(parseInt(e.target.value))){
        e.target.value = 1;
      }
      if(parseInt(e.target.value) > parseInt(e.target.max)){
        e.target.value = e.target.max;
      }
      await setCustQuantity(parseInt(e.target.value))
      console.log(cust_quantity, index=index)
      data = {"cust_quantity": cust_quantity, "index": index}
      dispatch(updateQuantity(data))
      // dispatch(updateQuantity(cust_quantity, index = index))
    }
    
  




  return(
      <>
          <table className="table table-hover">
              <thead>
                  <tr>
                  <th>Shopping Cart</th>
                  <th>Wine</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  </tr>
              </thead>
              <tbody className="table-group-divider">

                  

                  {/* FOR-LOOP OVER SHOPPINGCART ARRAY AND DISPLAY EACH SHOPPING ITEM OBJ : [ {}, {}, {}, {}, {}, etc... ] */}
                      {cartItems.map((cartItem, index) => {
                      return (
                          <tr key={ cartItem.id }>
                            <td><img
                          className="mx-auto img-thumbnail"
                          src={ cartItem.picture_url }/></td>
                            <td>Cart Id {index}</td>
                            <td>{cartItem.year} {cartItem.brand} {cartItem.varietal}</td>
                            <td> ************* {cartItem.cust_quantity}</td>
                            <td> <input onChange = {e => checkAndSetQuantity(e,index)} type="text" id="quantity" name="quantity" className="form-control input-number" value={cartItem.cust_quantity} min="1" max={cartItem.quantity} /></td>
                              {/* <td> { currentDataObj.item.year/brand/varietal } </td>
                              <td> { currentDataObj.item.cust_quantity } </td>
                              // input element?: put cust_quantity as the placeholder?
                              // buttons to increment up and down? left and right?
                              <td> { dataObj.item.price } </td> */}
                          </tr>
                      );
                  })}


                  <tr>
                      <td>
                          <img
                          className="mx-auto img-thumbnail"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3liyH9npeP69X4F7DphTeHf3iDpLV82b6U7nspVFASgL5_CNFXhTy-YOVjCawCIJUZs4&usqp=CAU"
                          />
                      </td>

                      <td> Year/Brand/Varietal </td>

                      <td> 
                          {/* <input onChange = {someEventName}  */}
                          {/* // value={quantity} max={data.quantity} */}
                          {/* type="text" id="quantity" name="quantity" className="form-control input-number" /> */}
                      </td>

                      <td>
                          $ Price
                      </td>                                                
                  </tr>




                  <tr>
                      <td>
                      <img
                          className="mx-auto img-thumbnail"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3liyH9npeP69X4F7DphTeHf3iDpLV82b6U7nspVFASgL5_CNFXhTy-YOVjCawCIJUZs4&usqp=CAU"
                          />
                      </td>

                      <td> Year/Brand/Varietal </td>

                      <td> 
                          Button 
                      </td>

                      <td>
                          $ Price
                      </td>                                                
                  </tr>






                  <tr>
                      <td>
                          <img
                          className="rounded mx-auto img-thumbnail"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3liyH9npeP69X4F7DphTeHf3iDpLV82b6U7nspVFASgL5_CNFXhTy-YOVjCawCIJUZs4&usqp=CAU"
                          />
                      </td>

                      <td> Year/Brand/Varietal </td>

                      <td> 
                          Button 
                      </td>

                      <td>
                          $ Price
                      </td>                                                
                  </tr>






                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                          {/* Calculate the total for shopping cart */}
                          <p>TOTAL: $ PRICE</p>
                          <button placeholder="onChange = {someOtherEventName}" href="#" className="btn btn-info btn-lg">
                          <span className="glyphicon glyphicon-shopping-cart"></span> Checkout
                          </button>
                      </td>                                                
                  </tr>



              </tbody>
          </table>            
      </>
  )
  };
  export default ShoppingCartTest;

