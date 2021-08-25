import React, {useEffect, useState} from 'react';


const Clock = () => {
    const [date, setDate] = useState(new Date());
    let timeID;

    useEffect(() =>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timeID = setInterval(()=>{
            tick();
        }, 1000)

        return () => clearInterval(timeID)
    })

    function tick() {
        setDate(new Date());
    }

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
};

export default Clock;