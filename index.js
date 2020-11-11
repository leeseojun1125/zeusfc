import dotenv from "dotenv";
import app from "./app";

import "./models/Video";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`ZEUS FC : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
