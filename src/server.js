import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
    let server = createServer({
        environment,

        models: {
        },

        seeds(server) {
        },

        routes() {
        },
    })

    return server
}