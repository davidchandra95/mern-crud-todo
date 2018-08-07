import mongoose from 'mongoose'

var Schema = new mongoose.Schema({
   fullName: String,
   todoText: String,
   timeStamp: {type: Date, default: Date.now}
})

export default mongoose.model('Todo', Schema);