import './style.css'
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/utils/Helpers/Navbar';
import NotFound from './components/Pages/NotFound';
import Footer from './components/utils/Helpers/Footer';
import Loader from './components/utils/Loader';
import { ToastContainer } from 'react-toastify';
import { lazy, Suspense, useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

function App() {
  
  const NewList = lazy(() => import('./components/Pages/List'))
  const NewLUser = lazy(() => import('./components/Pages/User'))
  const NewLDashboard = lazy(() => import('./components/Pages/Dashboard'), 2000)
  const NewLCart = lazy(() => import('./components/Pages/Cart'))

  const [isLoogedIn, setIsLoogedIn] = useState(false)

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('loggedInUser'))
    if(savedData !== null && savedData !== undefined){
      setIsLoogedIn(savedData)
    }    
  },[])

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar isLoogedIn={isLoogedIn}/>
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
