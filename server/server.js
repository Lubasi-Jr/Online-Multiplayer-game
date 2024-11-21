import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server on, listening on port ${PORT}`);
});
