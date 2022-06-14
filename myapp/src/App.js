import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { FrontPage } from './pages/frontPage/FrontPage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FrontPage/>
     <Footer/>
    </div>
  );
}

export default App;
