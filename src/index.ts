import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { createExpressServer } from "routing-controllers";
import { NoteController } from "./controllers/NoteController";

createConnection()
  .then(async connection => {
    console.log("Connection Established");
    const app = createExpressServer({
      cors: true,
      routePrefix: "/api",
      controllers: [NoteController]
    });

    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch(error => console.log(error));
