import React from 'react';
import error from '../../assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='p-20 flex flex-col justify-between items-center gap-5 text-center'>
            <img src={error} alt="" />
            <h2 className="text-3xl">
                Oops, page not found!
            </h2>
            <p className='text-gray-500'> 
                The page you are looking for is not available.
            </p>
            <div className="flex justify-center ">
                 
                <Link className='px-4 py-3 rounded-lg bg-[#00d390] font-semibold text-white' to={-1}>Go Back</Link>
            </div>
            
        </div>
    );
};

export default Error;