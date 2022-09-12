import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetWine from './WineDetails';
import WineList from './wines';
import Login from './login';
import SignUp from './signup';
import Winery from './winery';
import WineryList from './dashboard';
import { AuthProvider } from './auth';
import NavbarLayout from './navLayout';
import Contact from './contact';

function App(props) {

  return (

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
                <Route path="/everything-is-vine/wineries/:winery_id/wines/:winevo_id/" element={<GetWine />} />
                <Route path="/everything-is-vine/wineries/:id/" element={<Winery />} /> 
                <Route path="/everything-is-vine/wineries/:id/login/" element={<Login />} />
                <Route path="/everything-is-vine/wineries/:id/signup/" element={<SignUp />} />
              </Route>
            </Routes>
          </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
