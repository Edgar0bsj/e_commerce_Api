import type {expressType} from "../index.js"


export const server = (app:expressType)=>{
    
    const port:number = 3006

    const successfulReturn = ()=>{console.log(`Server running on port ${port}`)}

    app.listen(port, successfulReturn)

}