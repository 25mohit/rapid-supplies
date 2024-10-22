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
import { lazy, Suspense } from 'react';
import { HashLoader } from 'react-spinners';

function App() {
  
  const NewList = lazy(() => import('./components/Pages/List'))
  const NewLUser = lazy(() => import('./components/Pages/User'))
  const NewLDashboard = lazy(() => import('./components/Pages/Dashboard'), 2000)
  const NewLCart = lazy(() => import('./components/Pages/Cart'))

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Loader />
      <Suspense fallback={<div className='load'><HashLoader size={60} color='rgb(226, 226, 59)'/></div>}>
        <Routes>
          <Route path='/' exact element={<NewList />} />
          <Route path='/user' element={<NewLUser />} />
          <Route path='/dashboard' element={<NewLDashboard />} />
          <Route path='/cart' element={<NewLCart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
