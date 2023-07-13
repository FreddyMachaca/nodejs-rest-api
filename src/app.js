import express from "express";
import routes from "./routes.js";

const app = express();

//configurar o express para receber dados em json
app.use(express.json());

//usar router
app.use(routes);

export default app;
