import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from './auth'

function Winery () {

    const [winery,setWinery] = useState(
        {}
    )

    const {id} = useParams()
    
    const { token } = useAuthContext();

    async function fetchWinery(){
        const url = `http://localhost:8000/api/wineries/${id}/`;

        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setWinery(data.winery)
        }

        }

    // useEffect( () => {fetchWinery(token)},[])

    return (
        <>
        <div className='px-4 py-5 mt-0 my-5 text-center bg-transparent rounded opacity-100'>
            <h2 className='display-4'>Welcome to {winery.name}</h2>
            <div className="rounded mt-4" style={{ 
                backgroundImage: `url(${winery.url})`,
                backgroundRepeat: 'no-repeat',
                opacity: "100",
                backgroundSize: "cover",
                height: '500px',
                display: "block",
                boxShadow: "5px 5px 10px lightgrey"
                }}>
            </div>
            <h2 className='display-6'>About us</h2>
            <p className='px-4 py-5 bg-light mt-4 rounded'>{winery.description}</p>
        </div>
    </>    
    )
}

export default Winery