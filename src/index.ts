import express, { Router } from "express";
import { routes } from "./routes/user_route.js";

const rota = new routes(Router);

const app = express();
app.use(express.json());


app.use('/', rota.init());

app.listen(3006, function(){
    console.log("servidor rodando na porta 3006")
})