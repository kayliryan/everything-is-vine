import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetWine from './WineDetails';
import WineList from './wines';
import Login from './login';
import SignUp from './signup';
import WineryList from './dashboard';
import { AuthProvider } from './auth';
import ShoppingCartTest from './ShoppingCart';


function App(props) {

  return (

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
<<<<<<< HEAD
            <Route path="wineries/:id/shoppingcarttest/" element={<ShoppingCartTest />} />

=======
>>>>>>> main
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
