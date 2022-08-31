import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from './auth'

function Winery () {
    async function fetchWinery(){
        const url = `http://localhost:8000/api/wineries/${id}/`;

        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();}

    useEffect( () => {fetchWinery(token)},[])

    return (
        <>
        
        </>
    )







}
export default Winery