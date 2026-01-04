import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import useApp from '../useApp';
import Downloads from '../../assets/icon-downloads.png';
import Reviews from '../../assets/icon-review.png';
import Ratings from '../../assets/icon-ratings.png';
import Charts from './Charts';
import { useState } from 'react';
import AppError from '../Error/AppError';
import { toast } from "react-toastify";

const AppDetails = () => {
    const { id } = useParams();
    const {apps} = useApp();
    const findApp = apps.find(app=> (app.id) === Number(id));


    const {image, title, companyName,description, size, reviews, ratingAvg, downloads,ratings} = findApp || {};

    const [isdisabled, setIsDisabled] = useState(false);
     useEffect(() => {
        const installedApp = JSON.parse(localStorage.getItem('installed')) || [];
        const isDuplicate = installedApp.some(p => p.id === Number(id));
        if (isDuplicate) {
        setIsDisabled(true);
        }
    }, [id])
    

    const handleInstall = ({title}) =>{
        toast(
            <div className='text-[#00d390]'>
                <span className="loading loading-ring loading-xl"></span> {title} is Installed
            </div>
        );
        setIsDisabled(true);
        const installedApp = JSON.parse(localStorage.getItem('installed')) || [];

        
        let updatedListApp =[];
         
        
        updatedListApp = installedApp ? [...installedApp, findApp] : updatedListApp.push(findApp);
        
       

        localStorage.setItem('installed' , JSON.stringify(updatedListApp));
    };

    const handleAlreadyInstall = ({title}) =>{
        toast(
            <div className='text-[red] flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg> {title} is already Installed
            </div>
        );
    }
    
    return (
        <div>
            {id > 24 || isNaN(id) ? <AppError></AppError> :
        
        <div className='p-5 md:p-10 xl:p-20'>
            <title>{`Hero.io - ${title}`}</title>
            <div className='flex flex-col items-center md:flex-row gap-10'>
                <figure>
                    <img src={image} alt={title} className='w-[300px] rounded-xl h-[300px]' />
                </figure>
                <div className="flex flex-col min-w-1/2 items-center md:items-start justify-between space-y-2.5">
                    <div className="text">
                        <h2 className="text-3xl font-bold">
                            {title}
                        </h2>
                        <h3 className="font-semibold text-gray-600"> Developed by <span className='text-[#632ee3]'>{companyName}</span> 
                        </h3>

                    </div>
                    <div className="cont flex gap-10 items-center">
                        <div className="card space-y-2">
                            <img src={Downloads} alt={id} className='w-10 h-10'/>
                            <p className="text-gray-600">Downloads</p>
                            <h3 className="text-2xl font-bold">
                                {downloads}
                            </h3>
                        </div>
                        <div className="card space-y-2">
                            <img src={Ratings} alt={id} className='w-10 h-10'/>
                            <p className="text-gray-600">Ratings</p>
                            <h3 className="text-2xl font-bold">
                                {ratingAvg}
                            </h3>
                        </div>
                        <div className="card space-y-2">
                            <img src={Reviews} alt={id} className='w-10 h-10'/>
                            <p className="text-gray-600">Reviews</p>
                            <h3 className="text-2xl font-bold">
                                {reviews}
                            </h3>
                        </div>
                    </div>
                    <div>                    
                        <button onClick={()=>{ isdisabled ? handleAlreadyInstall({title}) : handleInstall({title})}} className={`${isdisabled? 'bg-gray-600':'bg-[#00d390]'} text-white px-4 py-3 rounded-xl`}>{`${isdisabled ? 'Installed' :`Install Now (${size}MB)`} `}</button>
                    </div>
                </div>
            </div>

           <div className="h-96 my-5 w-full">
                <Charts ratings = {ratings}></Charts>
           </div>



            <div className="my-5">
                <h2 className="text-2xl font-semibold">
                    Description
                </h2>
                <p className="text-gray-500 mt-5">
                    {description}
                </p>
            </div>
            <div className="flex justify-center ">
                 
                <Link className='px-4 py-3 rounded-lg bg-[#00d390] font-semibold text-white' to={-1}>Go Back</Link>
            </div>

            
        </div>}
        </div>
    );
};

export default AppDetails;