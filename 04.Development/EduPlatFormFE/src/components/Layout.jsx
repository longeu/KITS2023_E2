/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";

export default function Layout() {
  const location = useLocation().pathname;
  const [token,setToken] = useState(localStorage.getItem('token'));
  useEffect(()=>{
    setToken(localStorage.getItem('token'))
  },[location])
  return (
    <div>
    <header>
      {token && <Navbar />}
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      {token && <Footer/>}
    </footer>
  </div>
  )
}
