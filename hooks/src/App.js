import './App.css';
import Footer from './Components/H&F/Footer';
import Header from './Components/H&F/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="services" element={<Services />}/>
      <Route path="about" element={<AboutUs />}/>
      <Route path="contact" element={<ContactUs />}/>
      
      
        </Routes>
  </Router>
    
      </div>
  );
}

export default App;
