import axios from "axios";
import { useEffect, useState } from "react";

import React from 'react';

const useApp = () => {
    const [apps ,setApps] = useState([]);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        axios('/app.json')
        .then(r => setApps(r.data))
        .catch(err => setError(err))
        .finally(()=>setLoading(false))

    }, [])


    return (
        {apps , error ,loading}
    );
};

export default useApp;