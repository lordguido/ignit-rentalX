import "reflect-metadata";
import { DBFFile } from "dbffile";
import express from "express";
// import swaggerUi from "swagger-ui-express";

// import "./database";

// import "./shared/container";

// import { router } from "./routes";
// import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// app.use(router);

app.listen(3333, () => console.log("Server is running..."));

async function testRead() {
  const dbf = await DBFFile.open("pro.dbf", { encoding: "cp437" });
  const records = await dbf.readRecords(2000);
  console.log(records);
}
testRead();
