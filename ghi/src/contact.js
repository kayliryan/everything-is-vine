import './map.css'
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useAuthContext } from './auth'
import './map.css'

function SetCenter({center}){
    const map = useMap()
    map.setView(center, map.getZoom())
    return null
}

const Contact = () => {

    const [winery,setWinery] = useState(
        {}
    )
    const [geo,setGeo] = useState(
        {
        latitude: 0,
        longitude: 0
    }
    )

    const refForm = useRef ()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_cxkbqsr',
                'template_33v3z0g',
                refForm.current,
                'sIdJmf_LJwYdZl9jC',
            )
            .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
                },
                () => {
                alert('Failed to send the message, please try again')
                }   
            )
    }

    const {id} = useParams()
    
    const { token } = useAuthContext();

    async function fetchWinery(){
        const url = `http://localhost:8000/api/wineries/${id}/`;

        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setWinery(data.winery)
            setGeo(data.geo)}
        }
    
    useEffect( () => {fetchWinery(token)},[])
        


    let {latitude,longitude} = geo
    console.log(latitude,longitude)

    const position = []
    position.push(latitude)
    position.push(longitude)
    console.log(position)


    return (

        <>
            <div className="px-3 py-3 my-3 mt-5 text-center bg-light">
                <img className="bg-white rounded shadow d-block mx-auto mb-1" src="/logo.svg" alt="" width="600" />
                {/* <h1 className="display-5 fw-bold">Contact Us</h1> */}
                <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">
                        We thank you for your patronage and hope to see you soon at...
                        </p>
                        <h5 className='display-4'>{winery.name}</h5>
                        <p>{winery.owner} - OWNER</p>
                </div>
            </div>
            <div className='container'>      
                <div className="row" >
                    <div id="formContent" className='fadeInDown contact' style={{backgroundColor:"orchid"}}>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <h3 className= 'mt-4 display-5 text-light'>Contact Us</h3>
                                <div className="fadeIn form-input-row second">
                                    <input className="form-control" 
                                        type="text" 
                                        name="name"
                                        placeholder="Name"
                                        required />
                                </div>
                                <div className="fadeIn form-input-row second">
                                    <input className="form-control" 
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        />
                                </div>
                                <div className="fadeIn form-input-row third mb-3">
                                    <input className="form-control" 
                                        type="text"
                                        name="subject" 
                                        placeholder="Subject"
                                        required />
                                </div>
                                <div className="fadeIn form-input-row fourth mb-3">
                                    <textarea className="form-control bg-light textarea" 
                                        name="message"
                                        placeholder="Enter Message"
                                        required />
                                </div>
                                <div className="contact-btn-container">
                                <button type="submit" className="btn bg-light btn-lg btn-block text-dark mb-3">Submit</button>
                                </div>
                        </form>
                    </div>
                    <MapContainer className="map fadeIn third" center={[0, 0]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={{
                            lat: latitude ? latitude : 0,
                            lng: longitude ? longitude : 0,
                        }}>
                        <SetCenter center={[geo.latitude, geo.longitude]}/>
                        <Popup>Join us for a tasting!</Popup> 
                        </Marker> 
                    </MapContainer>
                </div>
            </div>
        </>
        )
}

export default Contact