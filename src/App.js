import logo from './logo.svg';
import './App.css';
import './routes/Login'
import Greeting from './routes/Login';

function App() {
  return (
    <div>
      <Greeting isLoggedin={false}/>
    </div>
  );
}

export default App;
