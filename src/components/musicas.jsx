import * as React from 'react';
import Botao from '../assets/selectMusicButton.png';


function Musicas() {
    const [query, setQuery] = React.useState('');

    function selectMusic(e) {
        e.preventDefault();
        console.log('Música selecionada:', query);
    }

    function handleInputChange(e) {
        setQuery(e.target.value);
    }
                     

    return(
        
          
            <div className="flex flex-col grow items-center px-16 py-11 w-full font-bold bg-white border-amber-500 border-solid border-[10px] rounded-[32px] text-amber-950 max-md:px-5 max-md:mt-2.5 max-md:max-w-full">
              <section className="justify-center p-2.5 text-5xl max-md:text-4xl">
                Músicas
              </section>
                <form onSubmit={selectMusic}>
                    <section className="flex flex-col self-stretch pb-16 mt-20 text-3xl text-center text-amber-950 text-opacity-70 max-md:mt-10 max-md:max-w-full">
                        <input type='text' 
                        className="flex justify-centerz-10 pt-8 pb-0 bg-white rounded-2xl border border-amber-500 border-solid max-md:pb-2.5 max-md:max-w-full"
                        placeholder='Selecione uma música'
                        name='query' 
                        value={query} 
                        onChange={handleInputChange}>
                        </input>
                    </section>        
                <section className="flex flex-col justify-center mt-9 max-w-full text-3xl text-center w-[119px]">
                        <button className="items-center flex gap-5 px-10 py-3 text-lg font-bold max-md:flex-wrap max-md:px-7 max-md:py-2 rounded-lg" type="submit">
                            <img src={Botao} alt=''/>
                        </button>
                </section>
                </form>
            </div>
    );
}    



export default Musicas;