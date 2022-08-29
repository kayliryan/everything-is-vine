import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useGetWineDetailsQuery} from './store/salesApi';

// export const WineDetails = ()  => {
//     let { winery_id, winevo_id } = useParams();
//     return <div>Now showing winery_id {winery_id} and winevo_id {winevo_id} </div>;
// };

function GetWine() {
  const {data, error, isLoading} = useGetWineDetailsQuery;
  const [wineDetails, setWineDetails] = useState(null);
  // const [error, setError] = useState(null);
  // const [wine_id, setWineId] = useState('')
  // const [winery_id, setWineryId] = useState('')
  // const [brand, setBrand] = useState('')
  // const [year, setYear] = useState('')
  useEffect(() => {
    async function useGetData() {
        let { winery_id, winevo_id } = useParams();
        const url = `${process.env.REACT_SALES_API}/api/wineries/${winery_id}/wines/${winevo_id}/`;
        const response = await fetch(url);
        let data = await response.json();
        // console.log(data)
          if (response.ok) {
              setWineDetails(data.wine);
          } else {
            setError(data.message);
            setWineDetails([]);
          }
    };
  useGetData();
}, []);

// const WineDetails = () => {
  return (
    GetWine()
    // <div className="container-fluid">
    //     <div className="card mx-auto col-md-3 col-10 mt-5">
    //         <img
    //         className="mx-auto img-thumbnail"
    //         src="https://i.imgur.com/pjITBzX.jpg"
    //         width="auto"
    //         height="auto"
    //         />
    //         <div className="card-body text-center mx-auto">
    //             <div className="cvp">
    //                 <h5 className="card-title font-weight-bold">Brand, Year</h5>
    //                 <h6>Varietal, Region,</h6>
    //                 <h6>Volume, ABV</h6>
    //                 <p className="card-text">Price</p>
    //                 <p>Description</p>
    //                 <button href="#" class="btn btn-info btn-lg">
    //                   <span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
    //                 </button>

    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};
// export default WineDetails;