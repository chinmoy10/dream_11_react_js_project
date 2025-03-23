import "./App.css";
import Banner from "./components/Header/Banner/Banner";
import Navbar from "./components/Header/Navbar/Navbar";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AllPlayersContainer from "./components/Main/AllPlayersContainer/AllPlayersContainer";
import { useState } from "react";
import { toast } from 'react-toastify';

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
      const remainingMoney = totalMoney - parseInt(totalPrice);
      setTotalMoney(remainingMoney);
    }

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleChoosePlayer = (player) => {
    if(player.player_price>totalMoney){
      toast.warn('Please add credits', {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
        });
    }else{
      const isExist =selectedPlayers.find((p)=>p.id==player.id);
      if(isExist){
        toast.error(`${player.player_name} is already selected`, {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
          });
      }else{
        const newSelectPlayer = [...selectedPlayers, player];
        if(newSelectPlayer.length<=6){
          setSelectedPlayers(newSelectPlayer);
          toast.success(`Congrats!! ${player.player_name} is now in your squad`, {
            position: "top-center",
            autoClose: 1000,
            theme: "colored",
            });
          handleIncreaseMoney(player.player_price);
        }else{
          toast.error('Not selected any player for this time', {
            position: "top-center",
            autoClose: 1000,
            theme: "colored",
            });
        }
      }
    }
  }

  const handleDelete = (id) => {
    const remainingPlayer = selectedPlayers.filter((p)=>p.id != id);
    setSelectedPlayers(remainingPlayer)

    // deleted Prayer
    const newPlayer = selectedPlayers.find((p)=>p.id==id);
      const deletedPrice = parseInt(newPlayer.player_price) + totalMoney;
      setTotalMoney(deletedPrice);
      toast.error(`${newPlayer.player_name} is removed from my squad`, {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
        });
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
