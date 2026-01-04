import React from 'react';
import Hero from '../../assets/hero.png'
import Playstore from '../../assets/playstore.png'
import AppStore from '../../assets/appstore.png'
const HeroComponent = () => {
    return (
        <div className='px-5 sm:px-20 pt-20 flex flex-col justify-between items-center gap-10 text-center'>
            <h1 className="text-4xl font-bold">
                We Build <br />
                <span className='bg-linear-to-tl from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent'>Productive</span> Apps
            </h1>
            <p className="text-gray-500 px-10">
                At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className="btn-grp flex gap-2 justify-between">
                <a className='btn py-2 text-xl font-semibold' target="_blank" href="https://play.google.com/store"> <img src={Playstore} alt="PlayStore" /> Google Play</a>
                <a className='btn py-2 text-xl font-semibold' target="_blank" href="https://www.apple.com/app-store/">
                    <img src={AppStore} alt="AppSotre" /> App Store
                </a>
            </div>
            <img src={Hero} alt="hero" />
            
        </div>
    );
};

export default HeroComponent;