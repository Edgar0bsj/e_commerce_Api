import type {expressType} from "../index.js"


export const server = (app:expressType, port:number)=>{
    
    const successfulReturn = ()=>{console.log(`Server running on port ${port}`)}

    app.listen(port, successfulReturn)

}