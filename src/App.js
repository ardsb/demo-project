import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemListPage from "./component/ItemListPage";
import DetailsPage from "./component/DetailsPage";
import { BrowserRouter } from "react-router-dom";


function App() {
  return(
    <Routes>
    <Route path="/" element={<ItemListPage />} />
    <Route path="/DetailsPage" element={<DetailsPage/>}/>
  </Routes>
  );
 
  
}

export default App;
