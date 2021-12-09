import { BrowserRouter,Routes ,Route  } from 'react-router-dom';
import Home from './components/1-FirstPage/Home';
import AboutMe from "./components/2-About me/AboutMe";
// import Contact from "./components/3-ContactMe/Contact";
import WorkSample from './components/4-WorkSmple/WorkSmple';
import './App.css';
import Navbar from './components/0-Navbar/Navbar';
import Footer from './components/5-Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/portfolio" element={<WorkSample />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
