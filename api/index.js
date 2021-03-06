import "dotenv/config"

import controler from './src/controler/controler.js'

import express from 'express';
import cors from 'cors';


const server = express();
server.use(cors());
server.use(express.json());
server.use(controler);

server.listen(process.env.PORT,() =>
                            console.log(`Porta de api em ${process.env.PORT}`));