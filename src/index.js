import express from 'express'
import config from 'config'
import cors from 'cors'
import {connectToDB} from './helpers/DBhelper.js'
import bookRouter from './routes/booksRouter.js'

const app = express()
const PORT = config.get('port')

app.use(cors())
app.use(express.json())
app.use('/api/', bookRouter)

async function start() {
  try {
    await connectToDB()
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}.`) )
  } 
  catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()