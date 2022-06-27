import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5000/anime",
});

export async function cadastrarAnime(anime) {
  const resposta = await api.post("/nome", {
    nome : anime,
  });
  return resposta;
}

export async function consultarAnime() {
  const resp = await api.get();
  return resp.data;
}
