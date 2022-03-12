import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import path from 'path'

import { errorHandlingMiddleware } from './middleware/ErrorHandlingMiddleware.js'
import { connectDB } from './db.js'
import * as models from './models/models.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve('', 'static')))
app.use(fileUpload({}))
dotenv.config() 
const PORT  = process.env.PORT || 5000
 
app.use('/api/', router)

//error middleware

app.use(errorHandlingMiddleware)

const start = async () => {
    try {   
        await connectDB.authenticate()  
        await connectDB.sync()
        app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`))
    } catch (error) {
        console.log(error)
    } 
}

start()



