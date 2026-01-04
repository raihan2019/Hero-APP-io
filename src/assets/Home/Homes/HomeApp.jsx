import React from 'react';
import useApp from '../../Components/useApp';
import { Link } from 'react-router';
import Apps from '../../Components/Apps/Apps';
import Spinner from '../../Components/Spinner/Spinner';
const HomeApp = () => {
    const {apps, loading} = useApp();
    const featuredApps = apps.slice(0 , 8)
    return (
        <div className='p-5 xl:p-10 2xl:p-20 text-center bg-[#efefef]'>
            <h2 className="text-3xl font-bold">Trending Apps</h2>
            <p className='text-gray-600 py-3'>Explore All Trending Apps on the Market developed by us</p>

            {loading ? <Spinner></Spinner>:
            <div className="app-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4 gap-5">
                {
                    featuredApps.map(app => 
                     <Apps key={app.reviews} app={app}></Apps>
                    )
                }

                <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center">
                    <Link to={'/apps'} className='px-4 py-3 rounded-lg mt-4 bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-white'>Show All</Link>
                </div>
                
            </div>
            }
            
        </div>
    );
};

export default HomeApp;