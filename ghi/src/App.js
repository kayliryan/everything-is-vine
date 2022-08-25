import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WineList from './wines';
import Login from './login';
import SignUp from './signup';
import WineryList from './dashboard';
import { AuthProvider } from './auth';

function App(props) {


  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <Nav /> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<WineryList />} />
            <Route path="wineries/wines/" element={<WineList />} />
            {/* <Route path="wineries/:id/" element={<WineList />} /> */}
            <Route path="wineries/:id/login/" element={<Login />} />
            {/* <Route path="wineries/:id/signup/" element={<SignUp />} /> */}

          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
