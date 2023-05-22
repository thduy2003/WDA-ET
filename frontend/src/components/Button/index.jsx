import { ProfileCircle } from 'iconsax-react';
import React from 'react';


const Button = ({ children, iconPosition, type, onClick, iconLeft, size, iconRight, style }) => {
    const outlineWhite = type === 'outline-white'
    const outlineRed = type === 'outline-red'
    const red = type === 'primary'
    return (
        <button onClick={onClick} style={style} className={`${red ? 'bg-p1 hover:bg-red hover:text-p1' : ''}${outlineWhite ? '  border-transparent  bg-transparent hover:border-white hover:border ' : ''} ${outlineRed ? 'text-p1 border border-p1 bg-transparent hover:border-[#FFDADA]' : 'text-secondary'} w-fit cursor-pointer rounded-[4px] flex items-center ${size === 'small' ? 'px-4 py-2' : 'py-[22px] px-[24px]'}  text-sm font-medium`}>
            {iconPosition === 'left' ? <span className='mr-3'>{iconLeft}</span> : ''}  {children}  {iconPosition === 'right' ? <span className='ml-3 '>{iconRight}</span> : ''}
        </button>
    );
};

export default Button;