import React, { useState } from 'react';
import Cima from '../assets/ArrowUp.png';
import Esquerda from '../assets/ArrowBack.png';
import Direita from '../assets/ArrowFwd.png';
import Baixo from '../assets/ArrowDown.png';

function Controle() {
    //eslint-disable-next-line
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleMouseDown = () => {
        setIsMouseDown(true);
        console.log('Botão pressionado');
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        console.log('Botão solto');
    };

    return (
        <div className="flex flex-col items-center">
            <section className="p-2.5 text-5xl font-bold text-center text-amber-950 max-md:text-4xl">
                Controle
            </section>
            <div className="flex flex-row mt-10 space-x-4">
                <div className="flex flex-col justify-center items-center ">
                    <button
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        className="flex justify-center items-center w-16 h-16 "
                    >
                        <img src={Esquerda} alt="seta esquerda" />
                    </button>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <button
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        className="flex justify-center items-center w-16 h-16 "
                    >
                        <img src={Cima} alt="seta cima" />
                    </button>
                    <button
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        className="flex justify-center items-center w-16 h-16 "
                    >
                        <img src={Baixo} alt="seta baixo" />
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <button
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        className="flex justify-center items-center w-16 h-16 pl-[10%]  "
                    >
                        <img src={Direita} alt="seta direita" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Controle;
