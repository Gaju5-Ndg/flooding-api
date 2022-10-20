import mongoose from "mongoose";

const StationSchema = new mongoose.Schema({
    city:{type: String},
    image:{type: String},
    title:{type: String}
})

const Stations = mongoose.model("stations",StationSchema )
export default Stations
