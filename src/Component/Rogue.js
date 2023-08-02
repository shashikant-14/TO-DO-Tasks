import React, { useEffect, useRef } from "react";

const Rogue = () => {
    const canvasRef = useRef();
    useEffect(()=>{
        console.log('Draw to canvas');
    });
    return(
        <canvas ref={canvasRef} width={200} height={200} style={{border:'1px solid red'}}>

        </canvas>
    );

}

export default Rogue;