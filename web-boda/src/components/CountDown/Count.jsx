import React, { useRef, useState } from 'react'

export const Count = () => {

    const Ref = useRef(null);
    const [timer, setTimer] = useState('000:00:00:00');

   

    
    return (



        <div className="count">
            <h1>
               {timer}
            </h1>
        </div>
    )
}