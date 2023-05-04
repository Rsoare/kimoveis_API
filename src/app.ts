import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express"
import { handleErros } from "./error/error"
import userRoutes from "./routes/users/users.routes"


const app:Application = express()

app.use(express.json())

app.use('/users',userRoutes)

// app.use('/login')

// app.use('/categories')

// app.use('/realEstate')

// app.use('/shedules')

app.use(handleErros)

export default app