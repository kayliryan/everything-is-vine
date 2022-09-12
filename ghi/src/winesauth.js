import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuthContext } from './auth'
import Winery from './winery';

function WineColumn(props) {
    const {id} = useParams()
return (
    <div className="col">
    {props.list.map(data => {
        console.log(data)
        const wine = data;
        return (
        <div key={wine.id} className="card mb-3 shadow">
            <img src={wine.picture_url} className="card-img-top mt-3" />
            <div className="card-body">
            <h5 className="d-flex justify-content-center card-title">{wine.year}</h5>
            <h6 className="d-flex justify-content-center card-subtitle mb-2 text-muted">
                {wine.varietal}
            </h6>
            <p className="d-flex justify-content-center card-text">
            <Link to={`/wineries/${id}/wines/${wine.id}`} className='btn p-2 mb-1 mt-1' style={{backgroundColor:"orchid"}}>Learn More & Order Here</Link>
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

function WineAuthList() {
    const [wineColumns,setWineColumns] = useState(
        [[], [], []]
    )
    const [wineryName,setWineryName] = useState(
        ''
    )

    const {id} = useParams()
    
    const { token } = useAuthContext();
        console.log("printing token", token)
        
    async function fetchWines(token){
        const url = `http://localhost:8000/api/wineries/${id}/wines/`;

        try {
        const response = await fetch(url,
            { credentials: "include",});

        if (response.ok) {
            const data = await response.json();

            const wineryName=data.wines[0].winery.name;

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

            setWineryName(wineryName)

            console.log(wineColumns)
            setWineColumns(wineColumns);
        }
        } catch (e) {
        console.error(e);
        }
    }

    useEffect( () => {fetchWines(token)},[])


    return (
        <>
            <div className="px-4 py-5 my-5 mt-4 text-center bg-light">
            <img className="bg-white rounded shadow d-block mx-auto mb-4" src="/logo.svg" alt="" width="600" />
            <h1 className="display-5 fw-bold">Our Wines</h1>
                <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">
                        Please enjoy a selection of our finest wines from {wineryName}.
                        </p>
                </div>
                </div>
                    <div className="container">
                    <div className="row">
                        {wineColumns.map((wineList, index) => {
                        return (
                            <WineColumn id={id} key={index} list={wineList} />
                        );
                        })}
                </div>
            </div>
        </>
    );

}

export default WineAuthList;