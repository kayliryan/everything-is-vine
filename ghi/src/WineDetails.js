import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useGetWineDetailsQuery} from './store/salesApi';
import { AiOutlineShoppingCart } from "react-icons/ai";
// import ErrorNotification from './ErrorNotification'


function GetWine() {
  let { winery_id, winevo_id } = useParams();
  const {data, error, isLoading} = useGetWineDetailsQuery({winery_id, winevo_id});
  const [shoppingItems, updateShoppingItems] = useState([]);

  if (isLoading) {
    return (
      <progress className="progress is-primary" max="100"></progress>
    );
  }


async function addToShoppingItems(){
  updateShoppingItems(data)
  }

  

// const WineDetails = () => {
  return (
    <>
        <div className="container-fluid mx-auto my-auto mt-5">
          <div className="card mx-auto col-lg col-4 mt-8">
              <img
              className="mx-auto img-thumbnail"
              src="https://i.imgur.com/pjITBzX.jpg"
              width="auto"
              height="auto"
              />
              <div className="card-body text-center mx-auto">
                  <div className="cvp">
                    <div className="col-sm">
                      <h3 className="card-title font-weight-bold">{data.brand}</h3>
                    </div>
                      <h3>{data.year}</h3>
                      <h3>{data.varietal}</h3>
                      <h3>Region: {data.region}</h3>
                      <h3>Alcohol: {data.abv}%</h3>
                      <h3>Volume: {data.volume} mL</h3>
                      <p className="card-text">Price</p>
                      <p>{data.description}</p>
                      <p>Quantity</p>
                      <button onClick = {addToShoppingItems} href="#" className="btn btn-success btn-lg">
                        <span className="align-items-center">Shopping Cart <AiOutlineShoppingCart/></span> 
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </>
  );
};
export default GetWine;