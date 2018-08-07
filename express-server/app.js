import express from 'express';
import path from 'path';
import bodyParser from 'body-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import bb from 'express-busboy'

import todoRoutes from './routes/todo.server.route'

const app = express();

// express-busboy to parse multipart/form-data
bb.extend(app);

// allow-cors
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*')
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
   next()
})

// configure app
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 3001

// database config
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mern-todo-app', {
   useMongoClient: true
})

app.use('/api', todoRoutes)

app.get('/', (req, res) => {
   return res.end('API working')
})

app.use((req, res, next) => {
   res.status(404).send('<h2 align=center>Page not found!</h2>')
})

app.listen(port, ()=> {
   console.log(`App server listening at ${port}`);
})