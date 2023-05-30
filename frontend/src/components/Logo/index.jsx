import React from 'react';

const Logo = ({ color }) => {
    const colorWhite = color === 'white'
    return (
        <div className='flex flex-row'>
            <span className={`${colorWhite ? 'text-[#FAFBFC]' : 'text-[#000000]'} text-2xl md:text-4xl font-bold`}>Vie</span><span className='text-2xl md:text-4xl font-bold text-linear' >Wander</span>
        </div>
    );
};

export default Logo;