// import AnimatedLetters from '../AnimatedLetters'
// import './map.scss'
// import './login.css'
import './map.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { AuthContext } from './auth'

const Map = () => {

    return (

    <>
        <div className="px-3 py-3 my-3 mt-5 text-center bg-light">
            <img className="bg-white rounded shadow d-block mx-auto mb-1" src="/logo.svg" alt="" width="600" />
            <h1 className="display-5 fw-bold">Contact Us</h1>
            <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                    We thank you for your patronage and hope to see you soon at DYNAMIC .
                    </p>
                    <p>DYNAMIC - OWNER</p>
            </div>
        </div>
        <div className='container'>      
            <div className="row" >
                <div id="formContent" className='fadeInDown contact' style={{backgroundColor:"orchid"}}>
                    <form>
                        <h3 className= 'mt-4 display-5 text-light'>Contact Us</h3>
                            <div className="fadeIn second">
                                <input className="form-control" 
                                    type="text" 
                                    name="name"
                                    placeholder="Name"
                                    required />
                            </div>
                            <div className="fadeIn second">
                                <input className="form-control" 
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    />
                            </div>
                            <div className="fadeIn third mb-3">
                                <input className="form-control" 
                                    type="text"
                                    name="subject" 
                                    placeholder="Subject"
                                    required />
                            </div>
                            <div className="fadeIn fourth mb-3">
                                <textarea className="form-control textarea" 
                                    name="message"
                                    placeholder="Enter Message"
                                    required />
                            </div>
                            <button type="submit" className="btn bg-light btn-lg btn-block text-dark mb-3">Submit</button>
                    </form>
                </div>
                <MapContainer className="leaflet-container" center={[38.7071,-121.2811]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[38.7071, -121.2811]}>
                    <Popup>Join us for a tasting!</Popup> 
                    </Marker>
                </MapContainer>
            </div>
        </div>
    </>
    )
}

export default Map


