import * as React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Controle() {
        const [isMouseDown, setIsMouseDown] = useState(false);
    
        const handleMouseDown = () => {
            setIsMouseDown(true);
        };
    
        const handleMouseUp = () => {
            setIsMouseDown(false);
        };
    
    return(
        <div>
            <button variant="contained" color="primary">
               <ArrowDownwardIcon />
                onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp}
                {...isMouseDown ? 'pra baixo' : 'solto'}
            </button>
            <button variant="contained" color="primary">
               <ArrowBackIcon />
                onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp}
                {...isMouseDown ? 'pra esquerda' : 'solto'}
            </button>
            <button variant="contained" color="primary">
               <ArrowUpwardIcon />
                onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp}
                {...isMouseDown ? 'pra cima' : 'solto'}
            </button>
            <button variant="contained" color="primary">
               <ArrowForwardIcon />
                onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp}
                {...isMouseDown ? 'pra direita' : 'solto'}
            </button>
        </div>
    );
}
export default Controle;