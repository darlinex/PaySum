
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './componets/landingpage/Landingpage';
// import {  toast } from 'react-toastify';
import ReactDOM from "react-dom/client";
import Login from './componets/authentication/Login';
// import Layout from './componets/Layout/Layout';
import Register from './componets/authentication/Register';

function App() {
  return (
    <div>
     
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>


        
        
      </Routes>
    
    </div>
  )
}

export default App



//  Nested routes inside Layout 
//  <Route element={<Layout />;

//   <Route path="/demo" element={<Demo />} />
// </Route>