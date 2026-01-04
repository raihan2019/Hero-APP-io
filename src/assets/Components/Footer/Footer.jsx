import React from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router';
import {  FaFacebookF, FaGithub, FaHome} from 'react-icons/fa';
import { FaLinkedin ,  FaDownload, FaCircleInfo, FaAppStoreIos, FaEnvelope } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='bg-[#001931] flex flex-col gap-5 justify-between items-center p-5 lg:px-20 lg:py-10 text-white'>
                <Link className="flex gap-2 font-bold items-center text-xl">
                        <img src={Logo} alt="logo" className='h-10 w-10' />Hero.io
                </Link>
            <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-5 items-center">

                
                <p className="text-lg col-span-2 lg:col-span-1 lg:col-start-2  text-center">
                    We make App to smooth your technology journey. Our apps are user friendly and more effective than other's app. If you need any types of query don't be hasitate to contact with us . We will appreciate your approch .
                </p>
                

                    <div className="social justify-self-center lg:row-start-1 lg:col-start-1 flex flex-col justify-between gap-4">
                        <a href="/" className='flex gap-2 items-center' ><FaHome  /><span className='font-medium '>Home</span></a>
                        <a href="#about" className='flex gap-2 items-center' ><FaCircleInfo /><span className='font-medium '>About</span></a>
                        <a href="/apps" className='flex gap-2 items-center' ><FaAppStoreIos /><span className='font-medium '>App</span></a>
                        <a href="/install" className='flex gap-2 items-center' ><FaDownload /><span className='font-medium '>Installation</span></a>

                    </div>
                    <div className="social justify-self-center items-end flex flex-col justify-between gap-4">
                        <a href="https://www.facebook.com/mirazulislam.shourov" target="_blank" className='flex gap-2 items-center' ><FaFacebookF  /><span className='font-medium '>Facebook</span></a>
                        <a href="https://github.com/st-shourov12/" target="_blank" className='flex gap-2 items-center' ><FaGithub /><span className='font-medium '>GitHub</span></a>
                        <a href="https://www.shourovsc38@gmail.com" target="_blank" className='flex gap-2 items-center' ><FaEnvelope /><span className='font-medium'>Mail</span></a>
                        <a href="https://www.linkedin.com/in/md-mirazul-islam-shourov-69a05637a/" target="_blank" className='flex gap-2 items-center' ><FaLinkedin /><span className='font-medium '>LinkedIn</span></a>
                        

                    </div>
               

            </div>
            <div className="text-white">
                
                <h3 className='text-center mt-5'>
                    Copyright © 2025 - All right reserved
                </h3>
            </div>
            
        </div>
    );
};

export default Footer;