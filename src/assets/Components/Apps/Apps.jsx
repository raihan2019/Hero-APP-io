import React from 'react';
import ratings from '../../assets/icon-ratings.png';
import Download from '../../assets/icon-downloads.png';
import { Link } from 'react-router';

const Apps = ({ app}) => {
    return (
        <Link to={`/apps/${app.id}`} className="card w-[296px] justify-self-center rounded-xl bg-white border-gray-300 border transform transition ease-in-out duration-200 hover:border-gray-600 hover:scale-105 p-2">
                            <figure>
                                <img src={app.image} alt="" className='w-[280px] h-[280px] rounded-xl' />
                            </figure>
                            <h3 className="text-xl text-left font-semibold">
                                {app.title}
                            </h3>
                            <div className="flex justify-between items-center">
                                <p className="font-bold flex items-center gap-2 text-[#00d390]">
                                    <img src={Download} className='w-4 h-4' alt="" />
                                    {app.downloads}
                                </p>
                                <p className="font-bold flex items-center gap-2 text-[#00d390]">
                                    <img src={ratings} className='w-4 h-4' alt="" />
                                    {app.ratingAvg}
                                </p>
                            </div>

        </Link>
    );
};

export default Apps;