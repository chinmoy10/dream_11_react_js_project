import React, { useEffect, useState } from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const AllPlayers = () => {

    const[players, setPlayers] = useState([]);


    useEffect (()=>{
        fetch("playerFakeData.json")
        .then(res => res.json())
        .then(data => {
            setPlayers(data);
        })
    },[])

    // console.log(players);

    return (
        <div>
            <div className='w-10/12 mx-auto py-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        players.map((player)=><SinglePlayer key={player.id} player={player}></SinglePlayer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPlayers;