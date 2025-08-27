import express, { Router } from "express";
import { routes } from "./routes/user_route.js";
import { Server } from "./server/Server.js";

const router = new routes(Router);
const serve = new Server(express, router);



serve.init();

