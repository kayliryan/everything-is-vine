import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetWine from './WineDetails';
import WineList from './wines';
import Login from './login';
import SignUp from './signup';
import WineryList from './dashboard';
import { AuthProvider } from './auth';
import ShoppingCartTest from './ShoppingCart';
import Checkout from './Checkout';
import { MainContext } from './mainContext';
import { useState } from 'react';

function App(props) {
  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")
  let [addressOne, setAddressOne] = useState("")
  // let [addressTwo, setAddressTwo] = useState(null)
  let [city, setCity] = useState("")
  let [state, setState] = useState("")
  let [zipCode, setZipCode] = useState("")
  let [country, setCountry] = useState("")
  let [cardName, setCardName] = useState("")
  let [cardNumber, setCardNumber] = useState("")
  let [expDate, setExpDate] = useState("")
  let [cvv, setCVV] = useState("")


  return (
    <MainContext.Provider value = {{
      firstName, setFirstName,
      lastName, setLastName,
      addressOne, setAddressOne,
      // addressTwo, setAddressTwo,
      city, setCity,
      state, setState,
      zipCode, setZipCode,
      country, setCountry,
      cardName, setCardName,
      cardNumber, setCardNumber,
      expDate, setExpDate,
      cvv, setCVV,
    }}>
      <AuthProvider>
        <BrowserRouter>
          {/* <Nav /> */}
          <div className="container">
            <Routes>
              <Route path="/" element={<WineryList />} />
              <Route path="wineries/:id/wines/" element={<WineList />} />
              <Route path="/wineries/:winery_id/wines/:winevo_id/" element={<GetWine />} />
              {/* <Route path="wineries/:id/" element={<WineList />} /> */}
              <Route path="wineries/:id/login/" element={<Login />} />
              <Route path="wineries/:id/signup/" element={<SignUp />} />
              <Route path="wineries/:id/shoppingcarttest/" element={<ShoppingCartTest />} />
              <Route path="wineries/:id/shoppingcarttest/checkout" element={<Checkout />} />

            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </MainContext.Provider>
  );
}

export default App;