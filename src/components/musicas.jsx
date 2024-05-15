import * as React from 'react';

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
        <div>
            <form className='form' onSubmit={selectMusic}>
                <label htmlFor='query' className='label'>Qual música você quer escutar?</label>
                <input type='text' name='query' className='input' value={query} onChange={handleInputChange} />
                <button type="submit">Selecionar música</button>
            </form>
        </div>
    );
}    
export default Musicas;