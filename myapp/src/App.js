import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { FrontPage } from './pages/frontPage/FrontPage';
import { Navbar } from './components/Navbar';
import { AllRoutes } from './components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
