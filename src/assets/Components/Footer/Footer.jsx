import React from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router';
import {  FaFacebookF, FaGithub, FaHome} from 'react-icons/fa';
import { FaLinkedin ,  FaDownload, FaCircleInfo, FaAppStoreIos, FaEnvelope } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='bg-[#001931] flex flex-row gap-5 justify-between items-center p-5 lg:px-20 lg:py-10 text-white'>
                <Link className="flex gap-2 font-bold items-start text-xl">
                        <img src={Logo} alt="logo" className='h-10 w-10'/>Hero.io
                </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-5 justify-items items-center w-full">
                    
                               <div className="text-white">                
                <h3 className='text-center mt-5'>Copyright © 2026 - All right reserved</h3>
            </div>

                    <div className="social justify-self-center items-end-safe flex flex-row justify-between gap-4">
                        <a href="https://www.facebook.com/mr.raihan247/" target="_blank" className='flex gap-2 items-center'><FaFacebookF/><span className='font-medium'>Facebook</span></a>
                        <a href="https://github.com/raihan2019" target="_blank" className='flex gap-2 items-center'><FaGithub/><span className='font-medium'>GitHub</span></a>
                        <a href="https://www.mohommad.raihan@gmail.com" target="_blank" className='flex gap-2 items-center'><FaEnvelope/><span className='font-medium'>Mail</span></a>
                    </div>
               

            </div>

            
        </div>
    );
};

export default Footer;