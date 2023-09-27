const mongoose = require('mongoose')
const Db_liveurl = 'mongodb+srv://shivambhd30:shivam8839336599@cluster0.mag7cq7.mongodb.net/rjitgrievanceportal?retryWrites=true&w=majority&appName=AtlasApp'
const local_url = "mongodb://localhost:27017/rjitgrievanceportal"


const connectdb = () => {
   return mongoose.connect(Db_liveurl)
      .then(() => {
         console.log('connection succesfully')
      }).catch((error) => {
         console.log(error)
      })

}
module.exports = connectdb