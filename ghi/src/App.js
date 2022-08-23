import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WineList from './wines';

function App(props) {

  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/wines/" element={<WineList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
