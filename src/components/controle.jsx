import React, { useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Controle() {
        // eslint-disable-next-line
        const [isMouseDown, setIsMouseDown] = useState(false);
    
        const handleMouseDown = () => {
            setIsMouseDown(true);
            console.log('Botão pressionado');
        };
    
        const handleMouseUp = () => {
            setIsMouseDown(false);
            console.log('Botão solto');
        };
    
    return(
        <div class=''>
            <h1 className='bg-black text-white'>Controle</h1>
            <button variant="contained" color="primary" onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp}>
               <ArrowDownwardIcon />
            </button>
            <button variant="contained" color="primary"onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp}>
               <ArrowBackIcon />
            </button>
            <button variant="contained" color="primary"onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp}>
               <ArrowUpwardIcon />
            </button>
            <button variant="contained" color="primary"onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp}>
               <ArrowForwardIcon />
            </button>
        </div>
    );
}
export default Controle;