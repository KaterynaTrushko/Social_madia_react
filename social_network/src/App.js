import React from "react";
import  Header from "./components/Header/Header";
import NavBar from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import './App.css';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        {/* <Profile />          */}
        <Dialogs />
      </div>
    </div>
  )
}

export default App;
