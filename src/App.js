import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import User from './components/Pages/User';
import Home from './components/Pages/Home';
import Dashboard from './components/Pages/Dashboard';
import Navbar from './components/utils/Helpers/Navbar';
import NotFound from './components/Pages/NotFound';
import HeroSection from './components/Section/HeroSection';
import Footer from './components/utils/Helpers/Footer';
import List from './components/Pages/List';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/list' exact element={<List />} />
        <Route path='/user' element={<User />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
