import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import useServices from './hooks/useServices';

function App() {
  const [services, setServices] = useServices();
  console.log(services);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
