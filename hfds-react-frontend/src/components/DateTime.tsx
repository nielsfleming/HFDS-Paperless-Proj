import { useState, useEffect } from 'react';

export const DateTime = () => {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    });

    return (
        <div className='m-10 text-end w-screen'>
            <p className='text-black font-semibold text-3xl'>
                {' '}
                {date.toLocaleDateString()} - {date.toLocaleTimeString()}
            </p>
        </div>
    );
};

export default DateTime;
