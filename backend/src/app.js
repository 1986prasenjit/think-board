import express from "express";

import notesRoutes from "./routes/notes.routes.js"


const app = express();

app.use(express.json())

app.use("/api/v1/notes", notesRoutes)


export default app;

//1VX1a38aQDyXivb9