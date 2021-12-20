import { BrowserRouter,Routes ,Route  } from 'react-router-dom';
import Home from './components/1-FirstPage/Home';
import Navbar from './components/0-Navbar/Navbar';
import Footer from './components/5-Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
