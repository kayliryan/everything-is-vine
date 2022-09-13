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
        <BrowserRouter>
            <div className="container">
              <Routes>
                <Route path="/everything-is-vine" element={<WineryList />} />
              </Routes>
              <Routes>
                <Route element={<NavbarLayout />}>
                  <Route path="/everything-is-vine/wineries/:id/wines/" element={<WineList />} />
                  <Route path="/everything-is-vine/wineries/:id/contact/" element={<Contact />} />
                  <Route path="/everything-is-vine/wineries/:id/request/" element={<Request />} />
                  <Route path="/everything-is-vine/wineries/:winery_id/wines/:winevo_id/" element={<GetWine />} />
                  <Route path="/everything-is-vine/wineries/:id/" element={<Winery />} /> 
                  <Route path="/everything-is-vine/wineries/:id/login/" element={<Login />} />
                  <Route path="/everything-is-vine/wineries/:id/signup/" element={<SignUp />} />
                  <Route path="/everything-is-vine/wineries/:id/shoppingcarttest/" element={<ShoppingCartTest />} />
                  <Route path="/everything-is-vine/wineries/:id/shoppingcarttest/checkout" element={<Checkout />} />
                </Route>
              </Routes>
            </div>
        </BrowserRouter>
      </AuthProvider>
    </MainContext.Provider>
  );
}

export default App;
