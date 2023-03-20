import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Invitations from './Invitations';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invitations" element={<Invitations />} />
      </Routes>
    </div>
  );
}

export default App;
