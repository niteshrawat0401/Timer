import React, { useState } from "react"
export const Timer=()=>{
    const [minute, setMinute]= useState(0);
    const [seconds, setSeconds]= useState(0);

    
    function handleChange(){
        setInterval(()=>{
            setMinute(seconds+1)
            if(seconds == 59){
                setMinute(minute + 1);
                setSeconds(0)
            }
        })
    }
    

    return(
        <div>
            <h1>Stop watch</h1>
            <p>{minute} : {seconds}</p>
            <button onClick={handleChange}>Start</button>
        </div>
    )
}