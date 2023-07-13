import express from "express";
import routes from "./routes.js";

const app = express();

//usar router
app.use(routes);

//configurar o express para receber dados em json
app.use(express.json());

export default app;
