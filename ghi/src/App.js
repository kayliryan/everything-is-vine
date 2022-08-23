import './App.css';
import NavigationBar from './components/navigation';
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <NavigationBar />
    </Router>
  );
}

export default App;
