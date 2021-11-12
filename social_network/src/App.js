import React from "react";
import Header from "./components/Header";
import NavBar from "./components/Nav";
import Profile from "./components/Profile";
import './App.css';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />         
    </div>
  )
}

export default App;
