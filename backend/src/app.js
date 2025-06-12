import express from "express";
import cors from "cors";

import notesRoutes from "./routes/notes.routes.js"


const app = express();

app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials:true
}))

app.use("/api/v1/notes", notesRoutes)


export default app;

//1VX1a38aQDyXivb9