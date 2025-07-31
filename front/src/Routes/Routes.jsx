import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import ScrollToTop from "../components/utils/ScrollToTop.jsx";
import NavBar from "../containers/NavBar/NavBar.jsx";
import Body from "../containers/Body/Body.jsx";
import Login from "../containers/user/Login/Login.jsx";
import Footer from "../containers/Footer/Footer.jsx";
import Register from "../containers/user/Register/Register.jsx";
import WhatEmail from "../containers/user/WhatEmail/WhatEmail.jsx";
import NewPassword from "../containers/user/NewPassword/NewPassword.jsx";
import DashBoard from "../containers/DashBoard/DashBoard.jsx";
import Avatars from "../containers/layouts/Avatars/Avatars.jsx";

const WrapRoutes = () => {

    const { user } = useLoginContext();

    return (
        <BrowserRouter>
            <ScrollToTop>

                <NavBar />
                
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/what_email" element={<WhatEmail />} />
                    <Route path="/password/:token" element={<NewPassword />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/avatars" element={<Avatars />} />
                </Routes>

                <Footer />

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default WrapRoutes;