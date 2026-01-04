import React from 'react';
import Apperror from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppError = () => {
    return (
        <div className='flex flex-col my-5 justify-between text-center gap-5 items-center'>
            <figure>
                <img src={Apperror} alt="" />
            </figure>
            <h2 className="text-3xl">
                Oops, App not found!
            </h2>
            <p className='text-gray-500'> 
                The App you are requesting is not found on our system.  please try another apps
            </p>
            <div className="flex justify-center ">
                 
                <Link className='px-4 py-3 rounded-lg bg-[#00d390] font-semibold text-white' to={-1}>Go Back</Link>
            </div>
        </div>
    );
};

export default AppError;