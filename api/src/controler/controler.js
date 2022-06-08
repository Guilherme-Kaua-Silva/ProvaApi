import {inserir, selecionar  } from '../repository/repository.js'

 import { Router } from 'express'
 const server = Router();

 server.post('/anime/nome', async (req,resp) => {
    try {
        const {nome } = req.body;
        const x = await listarAnimes(nome);
        resp.send({
            resposta : x
        })
    } catch (err) {
        resp.status(400).send({
            erro : err.message
        })
    }

 })

server.get('/anime', async (req,resp) => {
     try {
        const x = await anime();
        resp.send(x);          
     } catch (err) {
         resp.status(400).send({
             erro: err.message 
         })
     }
 })


 export default server;