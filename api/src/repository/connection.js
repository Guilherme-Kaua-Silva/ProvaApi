import 'mysql2/promise'
import {con} from 'con'



export function inserir(anime){
    const comando = `
    
    
    
    
    `;
    const [linha] = await con.query(comando[anime]);
    return linha; 
}