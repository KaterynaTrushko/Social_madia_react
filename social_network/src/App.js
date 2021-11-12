import React from "react";
import Header from "./components/Header";
import NavBar from "./components/Nav";
import Profiler  from "react";
import './App.css';
import Profile from "./components/Profile";

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
