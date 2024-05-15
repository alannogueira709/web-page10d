import React from 'react';
import Button from '@mui/material/Button';

function Coreografia() {
    function handleCoreografiaClick(e) {
        e.preventDefault();
        console.log('Coreografia iniciada');
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleCoreografiaClick}>
                Coreografia
            </Button>
        </div>
    );
}

export default Coreografia;