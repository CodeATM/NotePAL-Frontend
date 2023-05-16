import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashBoard from "./pages/UserDashBoard";
import TodoPage from "./pages/TodoPage";
import LoginModal from "./components/LoginModal";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <div>
          <div
            className={`${
              loginModal ? "block" : "hidden"
            } fixed transition-all index h-screen w-screen`}
          >
            <LoginModal setLoginModal={setLoginModal} />
          </div>
        </div>
        <div className= {`${
          loginModal? "active" : "non-active"
         } h-screen`}>
          <div className="grid col h-screen">
            <div className="h-full">
              <Navbar setLoginModal={setLoginModal} setDarkMode = {setDarkMode} darkMode={darkMode}/>
            </div>
            <div className="overflow-auto">
              <Routes>
                <Route
                  path="/"
                  element={<Home/>}
                />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/UserDashBoard" element={<UserDashBoard setLoginModal={setLoginModal}/>} />
                <Route path="/TodoPage" element={<TodoPage />} />
              </Routes>
            </div>
            <div className="">
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
