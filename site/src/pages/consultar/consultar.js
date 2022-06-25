import React from 'react'
import { useState, useEffect } from 'react';

import { consultarAnime } from '../../api/endpoins';

import { Link } from 'react-router-dom';

import './cadastrar.scss'

export default function Consulta() {
    const [animes, setAnimes] = useState([]);

    async function consultarTodos() {
        const resposta = await consultarAnime() 
        setAnimes(resposta);       
    }

    useEffect(() => {
        consultarTodos();
    }, []);
    return (
    <div>
        <div>
            <table>
                <thead>
                    <tr>
                        
                        <th>NOME</th>
                    </tr>
                </thead>
                <tbody>
                    {animes.map((item) => {
                        return(
                            <tr>
                                
                                <td> {item.nome} </td>
                            </tr>     
                        )
                    })}
                </tbody>
            </table>
            <Link to='/cadastrar' > INSERIR </Link>
        </div>
    </div>
  )
}