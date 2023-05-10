import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express"
import { handleErros } from "./error/error"
import userRoutes from "./routes/users/users.routes"
import loginRoutes from "./routes/login/login.routes"
import categoriesRoutes from "./routes/categories/categories.routes"
import realEstatesRoutes from "./routes/realEstate/realEstate.routes"


const app:Application = express()

app.use(express.json())

app.use('/users',userRoutes)

app.use('/login',loginRoutes)

app.use('/categories',categoriesRoutes)

app.use('/realEstate',realEstatesRoutes)

// app.use('/shedules')

app.use(handleErros)

export default app