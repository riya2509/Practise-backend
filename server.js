import express from "express";
import appRouter from "./app/routes/appRouter.js";

const app = express();
const PORT = 5000;

//middleware
app.use(express.json());
app.use("/api", appRouter);

app.listen(PORT, () => {
  console.log(
    `Server started on port ${PORT} at ${new Date().toLocaleString()}`
  );
});
