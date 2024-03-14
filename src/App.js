import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './llayouts/Header';
import Hero from './pages/Hero';
import History from './pages/History';
import Footer from './pages/Footer';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Slider from './component/Slider';
import Detail from './pages/Detail';



function App() {
  
  const [detail,setDetail]=useState("")
  const [search,setSearch] = useState("")


  return (
   <>
    <BrowserRouter>
    <Header setSearch={setSearch}/>
     <Routes>
      <Route element={<Slider/>} path='/'/>
      <Route elemet={<SignIn/>} path='/signin'/>
      <Route element={<SignUp/>} path='/signup'/>
      <Route element={<Hero setDetail={setDetail} search={search} />} path='/hero'/>
      <Route element={<History/>} path='/history'/>
      <Route element={ <Footer/>} path='/'/>
      <Route element={<Detail detail={detail}/>} path='/detail'/>
    </Routes>
   <Footer/>
    </BrowserRouter> 
   </>
  );
}

export default App;
