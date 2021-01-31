import express from "express";
import cors from "cors";
// import {connectDb} from "./config";
import bodyParser from "body-parser";
import AppRoutes from "./routes/index";

// connectDb();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

AppRoutes(app);
app.get("/", async (req, res) => {
  res.send(
    "Ok server working..  <br> <a href='/api/v1/example'>Click for test routes..</a>"
  );
});

app.listen(PORT, () => {
  console.log("Server has benn started at http://localhost:"+PORT);
});
