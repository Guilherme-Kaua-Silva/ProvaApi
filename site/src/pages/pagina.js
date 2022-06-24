import './paginas.scss'

import { useState } from 'react';
import storage from 'local-storage'
import { cadastrarAnime, consultarAnime } from '../api/endpoins.js'



export function Cadastrar() {
    const [nome, setNome] = useState('');

    async function salvarClick() {
        const r = await cadastrarAnime(nome);
        alert('Anime cadastrado');
    }

}




export function Consultar() {
    const [anime, setAnime] = useState([]);

    async function consultarPorNome() {
        const resp = await consultarAnime(anime);
        setAnime(resp);

    }
}


export default function Index() {
    return (
        <section>
            <div>
                <h3>Cadastrar Anime</h3>
                <br></br>
                <label>Nome do Anime:</label>
                <br></br>
                <input value={nome} onChange={e => setNome(e.target.value)}></input>     <button>Cadastrar</button>
            </div>
            <div>
                <div>
                    <h3>Consultar Anime</h3>
                    <tbody>{anime.map(item =>
                        <tr>
                            <td>{item.nome}</td>
                        </tr>
                    )};
                    </tbody>

                </div>
            </div>


        </section>
    );

}