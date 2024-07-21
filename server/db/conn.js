const mongoose = require("mongoose");

const DB = "mongodb+srv://nishitsaha52:nishit52@chatbot.3n4i0ho.mongodb.net/Chatbot?retryWrites=true&w=majority&appName=Chatbot"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})