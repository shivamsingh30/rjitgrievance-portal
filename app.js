const express = require('express')
//console.log(express)
const app = express()
const port = 3000
const web = require('./routes/web')
const connectdb=require('./db/connectdb')
 var session=require('express-session')
 var flash= require('connect-flash')
 //cokies
const cookieParser=require('cookie-parser')
app.use(cookieParser())


// db connection 
connectdb()

// for data get
app.use(express.urlencoded({extended:true}))


// for flash message
app.use(session({
  secret:'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
}));

app.use(flash());

// routing load
app.use('/',web)

// view engine ejs template or Embedded JavaScript templates
app.set('view engine', 'ejs')

// for image and css
app.use(express.static('public'))







// server create
app.listen(port, () => {
  console.log(`server is running at local host: ${port}`)
})