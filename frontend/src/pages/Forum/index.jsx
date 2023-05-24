import React from 'react';

const Forum = () => {
    return (
        <div className='mt-[36px] px-[92px]'>
            <div className='grid grid-cols-5'>
                <div className='col-span-1'>
                    left side
                </div>
                <div className='col-span-3'>
                    main side
                </div>
                <div className='col-span-1'>
                    right side
                </div>
            </div>
        </div>
    );
};

export default Forum;