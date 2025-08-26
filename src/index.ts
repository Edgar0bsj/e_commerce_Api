import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

interface user {id:number, name:string, ager:number}

const data:user[] = [];
let id:number = 0;

// Get
app.get('/',(req:Request, res:Response) => {
    res.send(data)
})
// Post
app.post('/submite', (req:Request, res:Response)=>{
    let _user:user = {
        id: ++id,
        name: req.body.name,
        ager: req.body.ager,
    }

    data.push(_user);
    res.send("dados capturados com sucesso!")
})
// Put
app.get('/query/:id',(req:Request, res:Response)=>{
    let userId = Number(req.params.id);
    let user = data.find(el => el.id === userId)

    res.send(user)
})


app.listen(3006, function(){
    console.log("servidor rodando na porta 3006")
})