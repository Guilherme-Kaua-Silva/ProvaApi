import {inserir, selecionar  } from '../repository/repository.js'

 import { Router } from 'express'
 const server = Router();

 server.post('/anime/nome', async (req,resp) => {
    try {
        const nome = req.body;
        const x = await inserir(nome);
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
        const x = await selecionar();
        resp.send(x);          
     } catch (err) {
         resp.status(400).send({
             erro: err.message 
         })
     }
 })


 export default server;