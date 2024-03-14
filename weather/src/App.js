import Header from "./layouts/Header";
import Main from "./component/Main";
import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./component/Details";


const App = () => {
  const[value,setValue]=useState("Bishkek")
  return (
<>
<BrowserRouter>
<Header setValue={setValue}/>
<Routes>
<Route element={<Main value={value}/>} path="/"/>
<Route element={<Details/>} path="/details"/>
</Routes>
</BrowserRouter>
</>
  );
}
export default App;
