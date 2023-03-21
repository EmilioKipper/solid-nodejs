import swaggerUI from "swagger-ui-express";

import { app } from ".";
import swaggerConfig from "./swagger.json";

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.listen(3333, () => console.log("Server is running!"));
