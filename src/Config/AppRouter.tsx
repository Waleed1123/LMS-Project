import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import DashboardScreen from "../Pages/Dashborad";

function AppRouter() {
 
    return <>
    
    <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<DashboardScreen />} />
    </Routes>
    </BrowserRouter>

       

    </>;
  }
  
  export default AppRouter;