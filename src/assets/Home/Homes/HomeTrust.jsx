import React from 'react';

const HomeTrust = () => {
    return (
        <div id='about' className='p-5 md:p-20 text-center bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-white'>
            <h2 className='text-4xl font-extrabold p-5'>Trusted by Millions, Built for You</h2>
            <div className="card-container flex flex-col sm:flex-row  justify-around items-center gap-5 my-10">
                <div className="card1 border border-gray-400 rounded-xl p-4 sm:border-0 sm:p-0 flex flex-col justify-between items-center text-center gap-2">
                    <p className='text-gray-200'>Total Downloads</p>
                    <h3 className='font-extrabold text-4xl'>29.6M</h3>
                    <p className='text-gray-200'>
                        21% more than last month
                    </p>
                </div>
                <div className="card2 border border-gray-400 rounded-xl p-4 sm:border-0 sm:p-0 flex flex-col justify-between items-center text-center gap-2">
                    <p className='text-gray-200'>Total Reviews</p>
                    <h3 className='font-extrabold text-4xl'>906K</h3>
                    <p className='text-gray-200'>
                        46% more than last month
                    </p>
                </div>
                <div className="card3 border border-gray-400 rounded-xl p-10 sm:border-0 sm:p-0 flex flex-col justify-between items-center text-center gap-2">
                    <p className='text-gray-200'>Active Apps</p>
                    <h3 className='font-extrabold text-4xl'>132+</h3>
                    <p className='text-gray-200'>
                        31 more will Launch
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeTrust;