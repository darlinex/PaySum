
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './componets/landingpage/Landingpage';
// import {  toast } from 'react-toastify';
import ReactDOM from "react-dom/client";

// import Layout from './componets/Layout/Layout';
// import ComingSoon from "./Componets/home/coming-soon";
// import Register from './componets/authentication/Register';

function App() {
  return (
    <div>
     
      <Routes>
        
        <Route path="/" element={<LandingPage />} />

        
        
      </Routes>
    
    </div>
  )
}

export default App



//  Nested routes inside Layout 
//  <Route element={<Layout />;

//   <Route path="/demo" element={<Demo />} />
// </Route>