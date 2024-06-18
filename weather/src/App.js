import Header from "./layouts/Header";
import Main from "./component/Main";
import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App = () => {
  const[value,setValue]=useState("Bishkek")
  return (
<>
<BrowserRouter>
<Header setValue={setValue}/>
<Routes>
<Route element={<Main value={value}/>} path="/"/>
</Routes>
</BrowserRouter>
</>
  );
}
export default App;
