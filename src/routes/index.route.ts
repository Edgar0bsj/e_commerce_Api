import express from "express";
import userRouter  from "../routes/user.route.js";
import type { expressType } from "../index.js";



export const direction = (app:expressType)=>{

    app.use(express.json());
    app.use("/user", userRouter );
    
}