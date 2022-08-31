import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from './auth'
import Nav from './nav';

function Winery () {

    const [winery,setWinery] = useState(
        {}
    )
    const {id} = useParams()
    
    const { token } = useAuthContext();
        console.log("printing token", token)

    async function fetchWinery(){
        const url = `http://localhost:8000/api/wineries/${id}/`;

        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            setWinery(data)}
        }

    useEffect( () => {fetchWinery(token)},[])

    return (
        <>
            <header>
            {/* <Nav /> */}
            </header>
            <div className="container-fluid">
                <div>{winery.name}</div>

            </div>
        </>
    )
}

export default Winery