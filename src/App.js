import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Invitations from './Invitations';
import Login from './Login';
import Register from './Register';
import Signup from './Signup';
import Admin from './Admin';
import Inmersiva from './Inmersiva';
import Contact from './Contact';

const Home = () => <h1>Home</h1>

function App() {
  return (
    <div className="App">
      <div id="controladores">
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
        <br/> 
        <Link to="/admin">Admin</Link>
        <br/> 
        <Link to="/inmersiva">Zona inmersiva</Link>
        <br/>
        <Link to="/contacto">Contacto</Link>
      </div>
      <div id="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invitations" element={<Invitations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/inmersiva" element={<Inmersiva />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
