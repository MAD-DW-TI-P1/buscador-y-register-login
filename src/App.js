import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Invitations from './Invitations';
import Login from './Login';
import Register from './Register';
import Signup from './Signup';

const Home = () => <h1>Home</h1>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Front de Cristina Maser
        </p>
      </header>
      <Link to="/">Home</Link>
      <br/> 
      <Link to="/invitations">Invitaciones</Link>
      <br/> 
      <Link to="/login">Login</Link>
      <br/> 
      <Link to="/register">Register</Link>
      <br/> 
      <Link to="/signup">Sign up</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invitations" element={<Invitations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
