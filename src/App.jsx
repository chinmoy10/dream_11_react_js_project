import "./App.css";
import Banner from "./components/Header/Banner/Banner";
import Navbar from "./components/Header/Navbar/Navbar";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AllPlayersContainer from "./components/Main/AllPlayersContainer/AllPlayersContainer";
import { useState } from "react";
import AllPlayers from "./components/Main/AllPlayersInfo/AllPlayers/AllPlayers";

function App() {

  const [isActive, setIsActive] = useState({
    player: true,
    status: "active"
  });

  const handleIsActiveBtn = (status)=>{
    if(status=="player"){
      setIsActive({
        player: true,
        status: "player"
      })
    }
    else{
      setIsActive({
        player: false,
        status: "selected"
      })
    }
  };


  return (
    <>
      <div className="sticky top-0 bg-[#fffffffa] shadow-md z-20">
        <Navbar></Navbar>
      </div>
        <Banner></Banner>
        <AllPlayersContainer handleIsActiveBtn={handleIsActiveBtn} isActive={isActive}></AllPlayersContainer>
        <AllPlayers></AllPlayers>
        <Newsletter></Newsletter>
    </>
  );
}

export default App;
