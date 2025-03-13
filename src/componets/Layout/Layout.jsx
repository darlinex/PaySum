import NavBar from "../Layout/Nav";
import Footer from "../Layout/Footer";
import { Outlet, Link } from "react-router-dom";


function Layout(){
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;