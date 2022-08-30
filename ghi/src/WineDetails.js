import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useGetWineDetailsQuery} from './store/salesApi';
// import ErrorNotification from './ErrorNotification'


function GetWine() {
  let { winery_id, winevo_id } = useParams();
  const {data, error, isLoading} = useGetWineDetailsQuery({winery_id, winevo_id});
  const [shoppingItems, updateShoppingItems] = useState([]);
  const [quantity, setQuantity] = useState(1)

  
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


  async function addToShoppingItems(){
    updateShoppingItems(data)
    }


  return (
    // <>
    // <p>{data.brand}</p>
    // </>
    
    // <p>{data.winevo.brand}</p>
    <div className="container-fluid">
        <div className="card mx-auto col-md-3 col-10 mt-5">
            <img
            className="mx-auto img-thumbnail"
            src="https://i.imgur.com/pjITBzX.jpg"
            width="auto"
            height="auto"
            />
            <div className="card-body text-center mx-auto">
                <div className="cvp">
                    <h5 className="card-title font-weight-bold">Brand, Year</h5>
                    <h6>Varietal, Region,</h6>
                    <h6>Volume, ABV</h6>
                    <p className="card-text">Price</p>
                    <p>Description</p>
                    <input onChange = {checkAndSetQuantity} type="text" id="quantity" name="quantity" className="form-control input-number" value={quantity} min="1" max={data.quantity} />
                    <button onClick = {addToShoppingItems} href="#" className="btn btn-info btn-lg">
                      <span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
                    </button>

                </div>
            </div>
        </div>
    </div>
  );
};
export default GetWine;