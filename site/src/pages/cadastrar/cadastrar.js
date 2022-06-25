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
                        <th> ID </th>
                        <th>NOME</th>
                    </tr>
                </thead>
                <tbody>
                    {animes.map((item) => {
                        return(
                            <tr>
                                <td> { item.id } </td>
                                <td> {item.nome} </td>
                            </tr>     
                        )
                    })}
                </tbody>
            </table>
            <Link to='/inserir' > INSERIR </Link>
        </div>
    </div>
  )
}