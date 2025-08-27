import express, { Router } from "express";
import { Routes } from "./routes/user.route.js";
import { Server } from "./server/Server.js";

const router = new Routes(Router);
const serve = new Server(express, router);



serve.init();

