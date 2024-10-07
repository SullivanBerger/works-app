import {Hono} from "hono";

const app = new Hono()

app.get("/", (c) => c.json("List properties"))

export default app