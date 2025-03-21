import React from 'react';
import { FaUser } from "react-icons/fa6";
import { BsFlagFill } from "react-icons/bs";

const SinglePlayer = ({player, handleChoosePlayer}) => {

    const {id, player_image, player_name, country_region, player_types, batting_hand, bowling_hand, player_price} = player

    return (
        <div>
            <div className="card bg-base-100 border-2 rounded-2xl shadow-md">
                <figure className="px-6 pt-6">
                    <img
                    src={player_image}
                    alt="Shoes"
                    className="rounded-2xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-2xl items-center text-[#131313]"><FaUser />{player_name}</h2>
                    <div className='flex justify-between'>
                        <div className='flex items-center text-lg gap-2'><BsFlagFill /><h1 className='font-semibold'>{country_region}</h1></div>
                        <div className='border px-3 py-2 bg-gray-50 rounded-xl text-lg'>{player_types[0]}</div>
                    </div>
                    <div className="divider"></div>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-bold'>Rating</h1>
                        <div className='flex justify-between text-xl font-medium'>
                            <h4>{batting_hand}</h4>
                            <h4>{bowling_hand}</h4>
                        </div>
                    </div>
                    <div className="card-actions items-center">
                    <p className='text-lg font-medium'>Price: ${player_price}</p>
                    <button onClick={()=>handleChoosePlayer(player)} className="btn bg-gray-50 font-medium rounded-xl">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePlayer;