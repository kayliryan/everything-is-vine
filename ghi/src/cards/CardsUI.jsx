import React from 'react';
import winedetail from '../images/winedetail.jpg';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useGetWineDetailsQuery} from '../store/salesApi';

import './card.css';

const Card = props => {
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

    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={data.picture_url} alt="Wine Detail" className='card-img-top'/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{data.brand}</h4>
                <h4 className="card-text text-dark">{data.year}</h4>
                <p className="card-text text-dark">{data.varietal} Varietal</p>
                <p className="card-text text-dark">{data.city_state}</p>
                <p className="card-text text-dark">Alcohol: {data.abv}%</p>
                <p className="card-text text-dark">Volume: {data.volume}mL</p>
                <p className="card-text text-dark">Price: {data.price}$</p>
                <p className="card-text text-dark">Quantity Available: {data.quantity}</p>
                <button onClick = {addToShoppingItems} href="#" className="btn btn-success btn-md">
                    <span className="align-items-center">Shopping Cart</span> 
                </button>
            </div>
        </div>
    );
}

export default Card;