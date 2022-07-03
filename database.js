const mongoose=require("mongoose");
const mongouri="mongodb+srv://scheduler:C9IixdpHJzfy3jng@cluster0.dmnsn.mongodb.net/hackelite?retryWrites=true&w=majority"


const connectToMongo=()=>{
    mongoose.connect(mongouri,()=>{
        console.log("connected to mongo")
    })
}
module.exports=connectToMongo;