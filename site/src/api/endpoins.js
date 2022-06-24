import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function cadastrarAnime(nome){
    const resposta = await api.post('/anime', 
        nome
    );
    return resposta.data;
}

export async function consultarAnime(nome){
    const resp = await api.get(nome);
    return resp.data;
}