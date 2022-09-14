import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WineList from './wines';
import Login from './login';
import SignUp from './signup';
import Winery from './winery';
import WineryList from './dashboard';
import { AuthProvider } from './auth';
import NavbarLayout from './navLayout';
import Contact from './contact';
import EditWinery from './winery_edit';
import EditWine from './wine_edit';
import NewWine from './new_wine';
import Request from './request';

function App(props) {

  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');
  //gitlab ci yaml file set the public url environment variable 
  //any of the image files need to have env variable in front of path

  return (

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

                <Route path="/wineries/:id/" element={<Winery />} /> 
                <Route path="/wineries/:id/login/" element={<Login />} />
                <Route path="/wineries/:id/signup/" element={<SignUp />} />
                <Route path="/wineries/:id/edit/" element={<EditWinery />} />
                <Route path="/wines/:id/edit/" element={<EditWine/>} />
                <Route path="/wineries/:id/wines/new/" element={<NewWine />} />
                <Route path="/request/" element={<Request />} />

              </Route>
            </Routes>
          </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
