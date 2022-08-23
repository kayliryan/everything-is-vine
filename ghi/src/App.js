import './App.css';
import NavigationBar from './components/navigation';
import Menu from './components/menu';
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Menu />
      <NavigationBar />
    </Router>
  );
}

export default App;
