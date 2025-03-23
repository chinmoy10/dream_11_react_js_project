import React from 'react';
import "./AllPlayersContainer.css"
import AllPlayers from '../AllPlayersInfo/AllPlayers/AllPlayers';
import SelectedPlayers from '../AllPlayersInfo/SelectedPlayers/SelectedPlayers';

const AllPlayersContainer = ({handleIsActiveBtn, isActive, handleChoosePlayer, selectedPlayers, selectPlayers, handleDelete}) => {
    return (
        <div>
            <div className='w-10/12 mx-auto py-8'>
                <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
                    <div><h1 className='text-3xl font-bold'>
                        {
                            isActive.player?`Available Players`:`Selected Players(${selectedPlayers}/6)`
                        }
                    </h1>
                    </div>
                    <div className='join'>
                        <button onClick={()=>handleIsActiveBtn("player")} className={`${isActive.player? "btn text-lg border-r-0 bg-[#E7FE29] rounded-l-xl" : 'btn text-lg border-r-0 rounded-l-xl text-slate-400'}`}>Available</button>
                        <button onClick={()=>handleIsActiveBtn("selected")} className={`${isActive.player? "btn text-lg border-l-0 text-slate-400 rounded-r-xl" : 'btn text-lg border-l-0 rounded-r-xl bg-[#E7FE29]'}`}>Selected ({selectedPlayers})</button>
                    </div>
                </div>
            </div>
            {
                isActive.player?<AllPlayers handleChoosePlayer={handleChoosePlayer}></AllPlayers>:<SelectedPlayers handleIsActiveBtn={handleIsActiveBtn} selectPlayers={selectPlayers} handleDelete={handleDelete}></SelectedPlayers>
            }
        </div>
    );
}; 

export default AllPlayersContainer;