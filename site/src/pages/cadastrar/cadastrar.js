
import React from 'react'
import { useState } from 'react'
import { cadastrarAnime } from '../../api/endpoins';
import { Link } from 'react-router-dom';

export default function Cadastrar() {
    const [text, setText] = useState('');

    async function cadastrar() {
        if(!text.trim()){
            alert('Texto invalido');
        }else{
            const resposta = await cadastrarAnime(text);
            setText('');
            alert('Anime cadastrado');
            
        }
    
    }

    return (
    <div >
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />

        <button onClick={cadastrar}> cadastrar </button>

        <Link to='/'> VOLTAR </Link>
    </div>
  )
};