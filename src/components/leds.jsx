import * as React from "react";
import Checkbox from '@mui/material/Checkbox';



function ControlledCheckbox({ onChange }) {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log(event.target.checked);
        if(onChange) {
            onChange(event.target.checked); 
        }
    }
    
    return (       
        <div>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
    );
}

function LigaLeds(leds) {
    const handleLedChange = (isOn) => {
        console.log(`${leds} ${isOn ? 'ligado' : 'desligado'}`);
    }

    return (
        <div>
            <ControlledCheckbox onChange={handleLedChange} />
        </div>
    );
}

export default LigaLeds;
