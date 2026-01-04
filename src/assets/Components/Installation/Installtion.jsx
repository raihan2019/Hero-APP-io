import React, { useEffect, useState } from 'react';
import Download from '../../assets/icon-downloads.png';
import Ratings from '../../assets/icon-ratings.png'
import AppError2 from '../Error/AppError2';
import { toast } from 'react-toastify';

const Installtion = () => {
    const [appList , setAppList] =useState([]);
   
    
    const [sortOrder, setSortOrder] =useState('none');

    useEffect(()=>{
         const installedApp = JSON.parse(localStorage.getItem('installed'));
         if(installedApp){
             setAppList(installedApp)
         }
    },[]);
    const sortedApp =(
        ()=>{
        if (sortOrder == 'size-asc') {
            return[...appList].sort((a,b) => parseInt(a.downloads) - parseInt(b.downloads))
        }else if (sortOrder == 'size-dsc') {
            return[...appList].sort((a,b) => parseInt(b.downloads) - parseInt(a.downloads))
        }else {
            return appList;
        }
        
    }
    )();

    const handleRemove = (app) => {
        


        const installedApp = JSON.parse(localStorage.getItem('installed')) || [];
        let updatedListApp = installedApp.filter(p=> p.id !== app.id)

        setAppList(pre => pre.filter(p=> p.id !== app.id));
         
        

        localStorage.setItem('installed' , JSON.stringify(updatedListApp));

        toast(
            <div className='text-[#ff8811]'>
                <span className="loading loading-ring loading-xl"></span> {app.title} Uninstalled
            </div>
        );
    }

    return (
        <div className='p-5 sm:p-10 md:p-20 text-center space-y-3 min-h-screen'>
            <title>Hero.io - Installation</title>
            <h2 className="text-4xl font-bold">Your Installed Apps</h2>
            <p className="text-gray-500">
                Explore All Trending Apps on the Market developed by us
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 justify-between my-5">
                <h3 className="text-xl font-semibold">{appList.length} App Found</h3>
                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value='none'>Sort by Size</option>
                        <option value='size-asc'>Low -&gt; High</option>
                        <option value='size-dsc'>High -&gt; Low</option>
                    </select>
                </label>
            </div>
            { appList.length === 0 ? <AppError2></AppError2> :
            <div className="con flex flex-col gap-3">
                {
                    sortedApp.map(app=> 
                        <div key={app.id} className="p-2 flex justify-between items-center border rounded-lg">
                            <div className='flex items-center gap-2'>
                                <figure>
                                    <img src={app.image} alt="" className="h-20 rounded-lg w-20" />
                                </figure>
                                <div className="f">
                                    <h3 className="text-xl text-left font-semibold">
                                        {app.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <div className="flex font-semibold text-[#00d390] items-center gap-1">
                                            <img src={Download} alt="" className="w-4 h-4" />
                                            {app.downloads}
                                        </div>
                                        <div className="flex font-semibold text-[#ff8811] items-center gap-1">
                                            <img src={Ratings} alt="" className="w-4 h-4" />
                                            {app.ratingAvg}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            
                                            {app.size}MB
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <button onClick={()=>(handleRemove(app))} className='px-4 py-3 rounded-lg bg-[#00d390] text-white'>Uninstall</button>
                        </div>
                    )
                }
            </div>}
        </div>
    );
};

export default Installtion;