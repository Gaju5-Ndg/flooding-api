import mongoose from "mongoose";

const SuggestionSchema = new mongoose.Schema({
    cityId:{type: String},
    title:{type: String},
    desc:{type: String},
})

const Suggestion = mongoose.model("suggestions", SuggestionSchema )
export default Suggestion
