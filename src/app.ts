import 'express-async-errors';
import express, { Application } from 'express';
import { handleErrors } from './errors';
import { userRouter, realEstateRouter, loginRouter, categoryRouter, scheduleRouter } from './routes';

const app: Application = express()
app.use(express.json())

app.use('/users', userRouter)
app.use('/login', loginRouter)
app.use('/realEstate', realEstateRouter)
app.use('/categories', categoryRouter)
app.use('/schedules', scheduleRouter)

app.use(handleErrors)

export default app