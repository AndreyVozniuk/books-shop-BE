import BooksDB from '../models/bookModel.js'

//maybe need to create services folder where will be all activities with DB

async function getAllBooks(req, res) {
  try {
    const books = await BooksDB.find({})

    res.status(200).json({ books })
  } catch (e) {
    console.log('error with getAllBooks => ', e)
    res.status(500).json({ message: 'Ooops, we cannot give books, sorry =(' })
  }
}

async function searchBooks(req, res) {
  try {
    const searchReg = new RegExp(req.query.value, 'i')
    let foundBooks = []

    if(req.query.option === 'byTitle'){
      foundBooks = await BooksDB.find({title: searchReg})
    }

    if(req.query.option === 'byAuthor'){
      foundBooks = await BooksDB.find({author: searchReg})
    }

    res.status(200).json({ foundBooks: foundBooks })
  } catch (e) {
    console.log('error with searchBooks => ', e)
    res.status(500).json({message: 'Ooops, search books don`t work, LOL :D'})
  }
}

async function filterBooks(req, res) {
  try {
    const filterCategories = req.query.categories === '' ? null : req.query.categories.replace('_', '')
    const filterPrice = req.query.price === '' ? null : req.query.price

    let filteredBooks = []

    if(filterCategories && filterPrice){
      filteredBooks = await BooksDB.find({categories: new RegExp(req.query.value, 'i')}).sort({price: sortBy})
    } else if(filterCategories) {
      filteredBooks = await BooksDB.find({categories: new RegExp(req.query.value, 'i')})
    } else if(filterPrice) {
      const sortBy = filterPrice === 'cheap' ? 'asc' : 'desc'
      filteredBooks = await BooksDB.find({}).sort({price: sortBy})
    }

    res.status(200).json({ filteredBooks })
  } catch (e) {
    console.log('error with filterBooks => ', e)
    res.status(500).json({message: 'Ooops, filter books don`t work, LOL :D'})
  }
}

export default {
  getAllBooks,
  searchBooks,
  filterBooks
}
