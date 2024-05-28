import React from 'react';
import CoreoBtn from '../assets/coreoBtn.png';

function Coreografia() {
    function handleCoreografiaClick(e) {
        e.preventDefault();
        console.log('Coreografia iniciada');
    }
    return (
            <div className="flex grow justify-center items-center px-16 py-20 w-full font-bold text-center bg-white border-amber-500 border-solid border-[10px] rounded-[32px] text-amber-950 max-md:px-5 max-md:mt-2.5 max-md:max-w-full">
              <div className="flex flex-col max-w-full max-h-full">
                <section className="text-5xl max-md:text-4xl">
                  Coreografia <br />
                </section>
                <section className="flex flex-col justify-center px-4 mt-48 text-3xl max-md:mt-10">
                  <div className="flex flex-col justify-center">
                    <button 
                    className="items-center gap-5 px-7 py-1.5 max-md:flex-wrap max-md:px-5 max-md:max-w-ful rounded-lg"
                    onClick={handleCoreografiaClick}>
                      <img src={CoreoBtn} alt=''/>
                    </button>
                  </div>
                </section>
              </div>
            </div>
    );
}
export default Coreografia;