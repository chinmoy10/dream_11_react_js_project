import "./App.css";
import Banner from "./components/Header/Banner/Banner";
import Navbar from "./components/Header/Navbar/Navbar";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AllPlayersContainer from "./components/Main/AllPlayersContainer/AllPlayersContainer";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState({
    player: true,
    status: "active",
  });

  const handleIsActiveBtn = (status) => {
    if (status == "player") {
      setIsActive({
        player: true,
        status: "player",
      });
    } else {
      setIsActive({
        player: false,
        status: "selected",
      });
    }
  };

  const [totalMoney, setTotalMoney] = useState(0);

  const handleClaimCredit = (money) => {
    const newClaimCredit = totalMoney + money;
    setTotalMoney(newClaimCredit);
  };

  const handleIncreaseMoney = (totalPrice) => {
    if(totalMoney<=0){
      alert("please add credit")
    }else{
      const remainingMoney = totalMoney - parseInt(totalPrice);
      setTotalMoney(remainingMoney);
    }
    
  }

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleChoosePlayer = (player) => {
    const isExist =selectedPlayers.find((p)=>p.id==player.id);
    if(isExist){
      alert('just one time added');
    }else{
      const newSelectPlayer = [...selectedPlayers, player];
      if(newSelectPlayer.length<=6){
        setSelectedPlayers(newSelectPlayer);
        handleIncreaseMoney(player.player_price);
      }else{
        alert('Not selected any player this time')
      }
    }
  }

  const handleDelete = (id) => {
    const remainingPlayer = selectedPlayers.filter((p)=>p.id != id);
    setSelectedPlayers(remainingPlayer)
  }

  return (
    <>
      <div className="sticky top-0 bg-[#fffffffa] shadow-md z-20">
        <Navbar totalMoney={totalMoney}></Navbar>
      </div>
      <Banner handleClaimCredit={handleClaimCredit}></Banner>
      <AllPlayersContainer
        handleIsActiveBtn={handleIsActiveBtn}
        isActive={isActive}
        handleChoosePlayer={handleChoosePlayer}
        selectedPlayers={selectedPlayers.length}
        selectPlayers = {selectedPlayers}
        handleDelete = {handleDelete}
      ></AllPlayersContainer>
      <Newsletter></Newsletter>
    </>
  );
}

export default App;
