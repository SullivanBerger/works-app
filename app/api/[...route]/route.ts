import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import properties from "@/app/api/[...route]/properties";

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.route("/properties", properties)

export const GET = handle(app)
