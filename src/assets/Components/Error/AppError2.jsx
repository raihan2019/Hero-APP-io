import React from 'react';
import Apperror from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppError2 = () => {
    return (
        <div className='flex flex-col my-5 justify-between text-center gap-5 items-center'>
            <figure>
                <img src={Apperror} alt="" />
            </figure>
            <h2 className="text-3xl">
                Oops, Installed App not found!
            </h2>
            <p className='text-gray-500'> 
                You did not install any app . Please install app for better Experience. 
            </p>
            <div className="flex justify-center ">
                 
                <Link className='px-4 py-3 rounded-lg bg-[#00d390] font-semibold text-white' to={-1}>Go Back</Link>
            </div>
        </div>
    );
};

export default AppError2;