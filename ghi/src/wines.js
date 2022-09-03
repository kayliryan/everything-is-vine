import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function WineColumn(props) {
    useEffect(() => {
        const [wineColumns,setWineColumns] = useState(
            [[], [], []]
        )
        const {id} = useParams()
    
        async function fetchWines(){
            const url = `http://localhost:8000/api/wineries/${id}/wines/`;
    
            try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
    
                const wineColumns = [[], [], []];
                let list = []
                for (let wine of data.wines){
                    list.push(wine)
                }
                console.log(list)
    
                let i = 0;
                for (const wine of list) {
                if (wine) {
                    wineColumns[i].push(wine);
                    i = i + 1;
                    if (i > 2) {
                    i = 0;
                    }
                } else {
                    console.error(wine);
                }
                }
    
                console.log(wineColumns)
                setWineColumns(wineColumns);
            }
            } catch (e) {
            console.error(e);
            }
        }}, [])
return (
    <div className="col">
    {props.list.map(data => {
        console.log(data)
        const wine = data;
        return (
        <div key={wine.id} className="card mb-3 shadow">
            <img src={wine.picture_url} alt="" className="card-img-top" />
            <div className="card-body">
            <h5 className="d-flex justify-content-center card-title">{wine.year}</h5>
            <h6 className="d-flex justify-content-center card-subtitle mb-2 text-muted">
                {wine.varietal}
            </h6>
            <p className="d-flex justify-content-center card-text">
                {wine.description}
            </p>
            </div>
            <div className="d-flex justify-content-center card-footer">
            Alcohol By Volume: {wine.abv}%
            </div>
        </div>
        );
    })}
    </div>
);
}


    // useEffect( () => {fetchWines()},[]) #unnecessary replaced it on line 32




    // return (
    //     <>
    //         <div className="px-4 py-5 my-5 mt-0 text-center bg-success">
    //         <img className="bg-white rounded shadow d-block mx-auto mb-4" src="/logo.svg" alt="" width="600" />
    //         <h1 className="display-5 fw-bold">Our Wines</h1>
    //         <div className="col-lg-6 mx-auto">
    //             <p className="lead mb-4">
    //             Please enjoy a selection of our finest wines. 
    //             </p>
    //         </div>
    //         </div>
    //         <div className="container">
    //         <div className="row">
    //             {wineColumns.map((wineList, index) => {
    //             return (
    //                 <WineColumn id={id} key={index} list={wineList} />
    //             );
    //             })}
    //         </div>
    //         </div>
    //     </>
    // );



export default WineList;