const mongoose=require('mongoose')
const dbUri='mongodb://localhost:27017/bot'
const connectDB=async ()=>{
    const conn=await mongoose.connect(dbUri,{
        useFindAndModify:false,
        useUnifiedTopology:true,
        useNewUrlParser:true
    });

    console.log(`MongoDB Connected:${conn.connection.host}`);

};


module.exports=connectDB;
