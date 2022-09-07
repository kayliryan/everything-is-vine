import React from 'react'
import { useParams } from 'react-router-dom';
// import { useState} from 'react';
import {useGetWineDetailsQuery} from './store/salesApi';
import Card from './cards/Cards';
// import ErrorNotification from './ErrorNotification'


function GetWine() {
  let { winery_id, winevo_id } = useParams();
  const {isLoading} = useGetWineDetailsQuery({winery_id, winevo_id});
  // const [] = useState([]);

  if (isLoading) {
    return (
      <progress className="progress is-primary" max="100"></progress>
    );
  }


// async function addToShoppingItems(){
//   updateShoppingItems(data)
//   }

  

// const WineDetails = () => {
  return (
    <>
      <Card />
    </>
  );
};
export default GetWine;


