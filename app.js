import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use("/static", express.static("static"));
app.use(cookieParser()); //사용자 인증
app.use(bodyParser.json()); //사진 업로드
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); //발생하는 일들을 기록

app.use(routes.home, globalRouter);
app.use(routes.videos, videoRouter);

export default app;
