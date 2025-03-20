import React from 'react';
import "./AllPlayersContainer.css"

const AllPlayersContainer = ({handleIsActiveBtn, isActive}) => {
    return (
        <div>
            <div className='w-10/12 mx-auto py-8'>
                <div className='flex justify-between'>
                    <div><h1 className='text-3xl font-bold'>Available Players</h1></div>
                    <div className='join'>
                        <button onClick={()=>handleIsActiveBtn("player")} className={`${isActive.player? "btn text-lg border-r-0 bg-[#E7FE29] rounded-l-xl" : 'btn text-lg border-r-0 rounded-l-xl text-slate-400'}`}>Available</button>
                        <button onClick={()=>handleIsActiveBtn("selected")} className={`${isActive.player? "btn text-lg border-l-0 text-slate-400 rounded-r-xl" : 'btn text-lg border-l-0 rounded-r-xl bg-[#E7FE29]'}`}>Selected (0)</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPlayersContainer;