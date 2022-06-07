


export async function inserir(anime){
    const comando = `
    insert into tb_animes(nm_anime)
	values (?); `;
    const [linha] = await con.query(comando[anime.nome]);
    return linha.affectedRows; 
}