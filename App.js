import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import AOS from 'aos';
import "aos/dist/aos.css"
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Commit from './Components/Commit/Commit';
import {Contacts} from './Components/Contacts/Contacts';
import Services from './Components/Services/Services';
import {Portfolio} from './Components/Projects/Portfolio';
import Faqmain from './Components/faq/Faqmain';
import Main from  './Components/detail/Main';

function App() {

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
     
      <Route path="/" element={<Home />} />
      
      <Route path="/Portfolio" element={<Portfolio/>} />
      <Route path="/Faqmain" element={<Faqmain/>}/>
      <Route path="/main" element={<Main/>}/>
      
      <Route path="/Commit" element={<Commit />} />
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}


export default App;
