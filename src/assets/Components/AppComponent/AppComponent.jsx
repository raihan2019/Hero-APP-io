import React, { useEffect, useState , } from 'react';
import useApp from '../useApp';
import Apps from '../Apps/Apps';
import Spinner from '../Spinner/Spinner';
import AppError from '../Error/AppError';
import Spinner3 from '../Spinner/Spinner3';





const AppComponent = () => {
    const {apps ,loading } = useApp();
    const [search, setSearch] = useState('');
    const [load, setLoad] = useState(false);
    const [searchedApp, setSearchedApp] = useState([]);

    useEffect(()=>{
        setLoad(true);
        
        const timer = setTimeout(() => {
        const lowerCaseApp = search.trim().toLowerCase();
        const searchApp = apps.filter(app=>app.title.toLowerCase().includes(lowerCaseApp));

        lowerCaseApp ? setSearchedApp(searchApp) : setSearchedApp(apps);
        
        setLoad(false);
        }, 200); 

        return () => clearTimeout(timer);
    }, [search, apps]);

    
    if (loading) {
        return <Spinner/>;
    }
    
    return (
        
            <div className='p-5 xl:p-10 2xl:p-20 space-y-3 flex flex-col justify-between bg-[#efefef]'>
                <title>Hero.io - Apps</title>
                <h2 className="text-4xl font-bold text-center">
                    Our All Applications
                </h2>
                <p className="text-gray-700 text-center">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
                <div className="flex my-4 flex-col sm:flex-row items-center gap-5 justify-between">
                    <h2 className="text-2xl font-bold">
                        ({searchedApp.length}) Apps Found
                    </h2>
                    <label className='input'>
                        <input value={search} onChange={e => {setSearch(e.target.value) }} type="search" name="" id="" placeholder='Search App' />
                    </label>
                    
                </div>
                {load ? <Spinner3></Spinner3>:  searchedApp.length === 0 ? <AppError></AppError> :
                <div className="app-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    { 
                        searchedApp.map(app => 
                        <Apps key = {app.id} app={app}></Apps>
                        )
                    }
                
                </div>
                }
                
            </div>
        
    );
};

export default AppComponent;
