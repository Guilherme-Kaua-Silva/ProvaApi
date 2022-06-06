import "dotenv/config"

import express from "express";
import cors from "cors";
import 'mysql2/promise'

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT,() =>
                            console.log(`Porta de api em ${process.env.PORT}`));