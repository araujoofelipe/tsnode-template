import express from 'express'
import { Router, Request, Response } from 'express'
import 'dotenv/config'

const app = express()
const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with typescript' })
})

app.use(route)

app.listen(process.env.APP_PORT, () =>
  console.log(`server running on port  ${process.env.APP_PORT}`)
)
