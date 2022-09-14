import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetWine from './WineDetails';
import WineList from './wines';
import Login from './login';
import SignUp from './signup';
import Winery from './winery';
import WineryList from './dashboard';
import { AuthProvider } from './auth';
import ShoppingCartTest from './ShoppingCart';
import Checkout from './Checkout';
import { MainContext } from './mainContext';
import { useState } from 'react';
import NavbarLayout from './navLayout';
import Contact from './contact';
import Request from './request';

function App(props) {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');

  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")
  let [addressOne, setAddressOne] = useState("")
  let [addressTwo, setAddressTwo] = useState("")
  let [city, setCity] = useState("")
  let [state, setState] = useState("")
  let [zipCode, setZipCode] = useState("")
  let [country, setCountry] = useState("")
  let [cardName, setCardName] = useState("")
  let [cardNumber, setCardNumber] = useState("")
  let [expDate, setExpDate] = useState("")
  let [cvv, setCVV] = useState("")
  let [lastFour, setLastFour] = useState("")


  return (
    
    <MainContext.Provider value = {{
      firstName, setFirstName,
      lastName, setLastName,
      addressOne, setAddressOne,
      addressTwo, setAddressTwo,
      city, setCity,
      state, setState,
      zipCode, setZipCode,
      country, setCountry,
      cardName, setCardName,
      cardNumber, setCardNumber,
      expDate, setExpDate,
      cvv, setCVV,
      lastFour, setLastFour,
    }}>
      <AuthProvider>
        <BrowserRouter basename={basename}>
            <div className="container">
              <Routes>
                <Route path="/" element={<WineryList />} />
              </Routes>
              <Routes>
                <Route element={<NavbarLayout />}>
                  <Route path="/wineries/:id/wines/" element={<WineList />} />
                  <Route path="/wineries/:id/contact/" element={<Contact />} />
                  <Route path="/wineries/:winery_id/wines/:winevo_id/" element={<GetWine />} />
                  <Route path="/wineries/:id/" element={<Winery />} /> 
                  <Route path="/wineries/:id/login/" element={<Login />} />
                  <Route path="/wineries/:id/signup/" element={<SignUp />} />
                  <Route path="/wineries/:id/shoppingcarttest/" element={<ShoppingCartTest />} />
                  <Route path="/wineries/:id/shoppingcarttest/checkout" element={<Checkout />} />
                </Route>
              </Routes>
            </div>
        </BrowserRouter>
      </AuthProvider>
    </MainContext.Provider>
  );
}

export default App;
