import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayers = ({selectPlayers, handleDelete}) => {
    console.log(selectPlayers);
    return (
        <div>
            <div  className='w-10/12 mx-auto py-8 space-y-3'>
            {
                selectPlayers.map((player)=>(
                    
                    <div>
                        <div className='flex border p-6 rounded-lg justify-between items-center'>
                            <div className='flex items-center space-x-4'>
                                <div>
                                <img className='w-32 rounded-lg' src={player.player_image} alt="" />
                                </div>
                                
                                <div className='space-y-2'>
                                    <h1 className='text-2xl font-semibold'>{player.player_name}</h1>
                                    <p className='text-gray-500'>{player.player_types[0]}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={()=>handleDelete(player.id)} className='btn bg-gray-50 border-none text-3xl text-red-500 shadow-md'><RiDeleteBinLine /></button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default SelectedPlayers;