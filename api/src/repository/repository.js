import {con } from './connection.js'



export async function inserir(anime){
    const comando = `
    insert into tb_animes(nm_anime)
	values (?); `;

    const [linha] = await con.query(comando[anime.nome]);
    return linha.affectedRows; 
}

export async function selecionar(anime){
    const comando = `
    select id_anime,
    nm_anime anime
    from tb_animes;
    `;
    const [linha] = await con.query (comando);
    return linha;

}

