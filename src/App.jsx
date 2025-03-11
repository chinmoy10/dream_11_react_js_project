import "./App.css";
import Banner from "./components/Header/Banner/Banner";
import Navbar from "./components/Header/Navbar/Navbar";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AllPlayersContainer from "./components/Main/AllPlayersContainer/AllPlayersContainer";

function App() {
  return (
    <>
      <div className="sticky top-0 bg-[#fffffffa] shadow-md z-20">
        <Navbar></Navbar>
      </div>
        <Banner></Banner>
        <AllPlayersContainer></AllPlayersContainer>
        <Newsletter></Newsletter>
    </>
  );
}

export default App;
