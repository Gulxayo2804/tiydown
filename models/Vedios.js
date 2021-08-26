
const mongoose=require('mongoose')
const VedioSchme=mongoose.Schema({
    image: {type: String, required:true},
    date:{ type: Date, default: Date.now()}
})

module.exports=mongoose.model('Vedios', VedioSchme)