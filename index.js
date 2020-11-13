import "@babel/polyfill";
import dotenv from "dotenv";
import app from "./app";

import "./models/Video";

dotenv.config();

const PORT = process.env.PORT || 5000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
