import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({   
    cityId:{type: String},
    moisture:{type: String},
    temp:{type: String},
    cloudy:{type: String}
})

const Data = mongoose.model("datas", DataSchema)
export default Data
