import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5000",
});

export async function cadastrarAnime(nome) {
  const resposta = await api.post("/anime", {
    nome : anime,
  });
  return resposta;
}

export async function consultarAnime() {
  const resp = await api.get(nome);
  return resp.data;
}
