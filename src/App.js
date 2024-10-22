import './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import User from './components/Pages/User';
import Dashboard from './components/Pages/Dashboard';
import Navbar from './components/utils/Helpers/Navbar';
import NotFound from './components/Pages/NotFound';
import HeroSection from './components/Section/HeroSection';
import Footer from './components/utils/Helpers/Footer';
import List from './components/Pages/List';
import Cart from './components/Pages/Cart';
import Loader from './components/utils/Loader';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Loader />
      <Routes>
        <Route path='/' exact element={<List />} />
        <Route path='/user' element={<User />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
