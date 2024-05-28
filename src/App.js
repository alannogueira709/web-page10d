import React from 'react';
import './App.css';
import Logo from './assets/logo.png';
import Twitter from './assets/twitter-logo.png';
import Facebook from './assets/face-logo.png';
import Instagram from './assets/insta-logo.png';
import UFRN from './assets/ufrn-logo.png';
import Lance from './assets/lance-logo.png';
import Controle from './components/controle';
import Musicas from './components/musicas';
import Coreografia from './components/coreografia';



function App() {
  return (
    <div className="flex flex-col items-center">
       <header className="flex flex-col self-stretch pb-2.5 w-full max-md:max-w-full">
       <nav className="flex justify-center items-center px-16 bg-white border-amber-500-solid border-b-[3px] max-md:px-5 max-md:max w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1212px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col justify-center items-start px-3 bg-white bg-opacity-0 max-md:pr-5">
            <a href=''>
              <img src={Logo} alt="Logo" className="w-20 h-20"/>
            </a>
          </div>
          
          <div>
            <div className="flex gap-5 px-7 py-1.5
            text-base font-bold text-center max-md:flex-wrap max-md:px-5">
               <button className='bg-transparent  hover:text-[#A0470C] py-2 px-4 border border-[#D96204] hover:border-[#A0470C] rounded'>
                Giróscopio
                </button> 
              <button className='bg-transparent  hover:text-[#A0470C] py-2 px-4 border border-[#D96204] hover:border-[#A0470C] rounded' >
                Digital Twins
              </button>
              <button className="bg-[#FF950C] text-[#461C04] py-2 px-4 border  hover:bg-[#F47902] rounded" text="Menu item" isActive >
                Sobre
              </button> 
            </div>
          
          </div>
        </div>
       </nav>
       </header>
        
        <main className="flex justify-center items-center flex-col py-16 pl-16 mt-8 w-full bg-white border-amber-500 border-solid border-[6px] max-w-[1100px] rounded-[32px] max-md:pl-5 max-md:max-w-full">
          <Controle/>
        </main>
    

        <aside className="flex mt-8 w-full max-w-[1099px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <section className="flex-1 flex-col w-full  bg-white border-10 border-amber-500 rounded-32 text-amber-950 font-bold">
              <Musicas/>
            </section>
            <section className="flex-1 flex-col w-full bg-white border-10 border-amber-500 rounded-32 text-amber-950 font-bold">
              <Coreografia/>
            </section>
          </div>
        </aside>


          <footer className="flex flex-col justify-center self-stretch mt-20 w-full bg-stone-500 bg-opacity-80 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-center px-16 pt-6 pb-3.5 w-full max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col max-w-full w-[604px]">
                      <div className="flex gap-5 justify-between items-center max-md:flex-wrap">
                        <img
                          loading="lazy"
                          src={Logo}
                          className="shrink-0 self-stretch max-w-full aspect-[0.93] w-[130px]"
                          alt=""
                        />
                        <div className="shrink-0 self-stretch my-auto w-px bg-black border border-solid h-[111px]" />
                        <img
                          loading="lazy"
                          src={Lance}
                          className="shrink-0 self-stretch my-auto w-48 max-w-full aspect-[1.67]"
                          alt=""
                        />
                        <div className="shrink-0 self-stretch my-auto w-px bg-black border border-solid h-[111px]" />
                        <img
                          loading="lazy"
                          src={UFRN}
                          className="shrink-0 self-stretch my-auto w-40 max-w-full aspect-[1.69]"
                          alt=""
                        />
                      </div>
                      <div className="flex gap-5 justify-between self-center mt-16 max-w-full w-[394px] max-md:mt-10">
                        <a href='https://www.facebook.com/10dimensoes/'>
                          <img
                            loading="lazy"
                            src={Facebook}
                            className="shrink-0 my-auto aspect-square w-[86px]"
                            alt=""
                          />
                        </a>
                        <div className="flex gap-5 justify-between">
                          <a href='https://www.instagram.com/10dimensoes/'> 
                            <img
                              loading="lazy"
                              src={Instagram}
                              className="shrink-0 my-auto aspect-square w-[88px]"
                              alt=""
                            />
                          </a>
                          <a href='https://x.com/10dimensoes'>
                            <img
                              loading="lazy"
                              src={Twitter}
                              className="shrink-0 max-w-full aspect-[1.37] w-[141px]"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
          </footer>
    </div>
  );
}

export default App;
