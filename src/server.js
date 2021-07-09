import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      app: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.apps.all();
      });
    },
  });

  return server;
}
