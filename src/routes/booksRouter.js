import {Router} from 'express'
import bc from '../controllers/booksController.js'

const bookRouter = Router()

bookRouter.get('/books', bc.getAllBooks)
bookRouter.get('/searchBooks', bc.searchBooks)
bookRouter.get('/filterBooks', bc.filterBooks)

export default bookRouter