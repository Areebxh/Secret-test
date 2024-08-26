require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')
const botRouter= require("./routes/RehaishBot");

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log("Connected to mongodb successfully")
})

//routes

app.use('/admin' , require('./routes/adminRouter'))
app.use('/user', require('./routes/registerRouter'))
app.use('/user', require('./routes/loginRouter'))
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/uploadimgRouter'))
app.use('/owner',require('./routes/hostelRouter'));
app.use('/chatbot',botRouter);



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})