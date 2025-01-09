
import Inicio from "./pages/Inicio/index";

import PaginaBase from "./pages/PaginaBase/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function AppRoutes() {
  return (
    <BrowserRouter>
  
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Inicio />} />                    
            </Route>      
       
        </Routes>
 
    </BrowserRouter>
  );
}

export default AppRoutes;
