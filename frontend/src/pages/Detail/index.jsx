import React from 'react';

const Detail = () => {
    const array = [[1, 2, 3, 4,], [5, 6, 7]]
    return (
        <div className='flex flex-col gap-y-20'>
            {array.map((a, x) => {
                console.log(array.length)
                return <div className='flex gap-x-20 w-fit' style={{ borderBottom: 'solid 1px red' }} key={x}>
                    {a.map((b, i) => {
                        console.log(a)
                        return <div key={i}>{x === 0 && i === 0 ? 'Thành phố Hồ Chí Minh' : ''}{b} {x === array.length - 1 && i === a.length - 1 ? 'Hà Nội' : ''} </div>
                    })}
                </div>
            })}
        </div>
    );
};

export default Detail;