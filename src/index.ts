import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

type user = {
    id: number;
    name: string;
    ager: number
}

const data:user[] = [];
let id:number = 0;

// Get
app.get('/user',(req:Request, res:Response) => {
    res.send(data)
})
// GetAll
app.get('/user/:id',(req:Request, res:Response)=>{
    let userId = Number(req.params.id);
    let user = data.find(el => el.id === userId)

    res.send(user)
})
// Post
app.post('/user/submite', (req:Request, res:Response)=>{
    let _user:user = {
        id: ++id,
        name: req.body.name,
        ager: req.body.ager,
    }

    data.push(_user);
    res.send("dados capturados com sucesso!")
})
// Put
app.put('/user/edit/:id',(req: Request, res:Response)=>{
    let id = Number(req.params.id);
    let clientUser = req.body;

    data.forEach(el => {
        if (el.id === id) {
            el.name = clientUser.name;
            el.ager = clientUser.ager;
        }
    })
    res.send("item alterado com sucesso!");
})
// Delete
app.delete('/user/delete/:id',(req:Request, res:Response)=>{
    let id = Number(req.params.id);
    let userIndex = data.findIndex(el=>el.id === id);
    data.splice(userIndex, 1);

    res.send("Usuario deletado com sucesso!")
})

app.listen(3006, function(){
    console.log("servidor rodando na porta 3006")
})