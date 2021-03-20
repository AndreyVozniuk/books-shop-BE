import config from 'config'
import mongoose from 'mongoose'

const dbURL = config.get('dbURL')

export async function connectToDB() {
  try {
    mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log('Database connected!')
  } catch (e) {
    console.log("DB error", e)
    process.exit(1)
  }
}
