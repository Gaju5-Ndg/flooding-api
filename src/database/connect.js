import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://Gaju:le5102000@cluster0.5u1vx.mongodb.net/flooding_system?"

const connect = async () =>{
    await mongoose.connect(
        MONGO_URL,
       {   useNewUrlParser: true,
           useUnifiedTopology: true
       }).then(() => console.log('database connected successfully!!'))
       .catch((error) => console.log('error', error));
}

export default connect
