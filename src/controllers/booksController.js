import BooksDB from '../models/bookModel.js'

async function getAllBooks(req, res) {
  try {
    const books = await BooksDB.find({})
    res.status(200).json(books)
  } catch (e) {
    res.status(500).json({message: 'Ooops, we cannot give books, sorry =('})
  }
}

async function searchBooks(req, res) {
  try {
    const searchReg = new RegExp(req.query.value, 'i')
    let findedBooks = []

    if(req.query.option === 'byTitle'){
      findedBooks = await BooksDB.find({title: searchReg})
    }
    
    if(req.query.option === 'byAuthor'){
      findedBooks = await BooksDB.find({author: searchReg})
    }

    res.status(200).json(findedBooks)
  } catch (e) {
    res.status(500).json({message: 'Ooops, search don`t work, LOL :D'})
  }
}

async function filterBooks(req, res) {
  try {
    const filterCategories = req.query.categories === '' ? null : req.query.categories.replace('_', '')
    const filterPrice = req.query.price === '' ? null : req.query.price

    // console.log(filterCategories, filterPrice)

    let filtredBooks = []

    if(filterCategories && filterPrice){

    } else if(filterCategories) {
      filtredBooks = await BooksDB.find({categories: new RegExp(req.query.value, 'i')})
    } else if(filterPrice) {
      const sortBy = filterPrice === 'cheap' ? 'asc' : 'desc'
      filtredBooks = await BooksDB.find({}).sort({})
    }

    res.status(500).json(filtredBooks)
  } catch (e) {
    console.log('error', e)
    res.status(500).json({message: 'Ooops, filter don`t work, LOL :D'})
  }
}

export default {
  getAllBooks,
  searchBooks,
  filterBooks
}
