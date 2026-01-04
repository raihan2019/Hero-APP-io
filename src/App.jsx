import React, { useEffect, useState } from 'react';
import Header from './assets/Components/Header/Header';
import Footer from './assets/Components/Footer/Footer';
import './App.css';
import { Outlet, useLocation } from 'react-router-dom'; 
import { ToastContainer } from "react-toastify";
import Spinner from './assets/Components/Spinner/Spinner';

function App() {
  const location = useLocation();

  const [loader, setLoader] = useState(false);
  useEffect(() => {
    {
      setLoader(true);
      const timer = setTimeout(() => setLoader(false), 200); 
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <Header></Header>
      {
        loader ? <Spinner/> :
        <Outlet></Outlet>
      }
      <Footer></Footer>
      <ToastContainer/>
      
    </>
  )
}

export default App;
