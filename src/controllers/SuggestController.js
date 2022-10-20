import Suggestion from "../modals/Suggestions"

const createSuggest = async(req,res) =>{
    try {
       const suggest = await  Suggestion.create(req.body)
       return res.status(200).json({message:"suggest create successfully", suggest})
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

const getCitySuggest = async(req,res) =>{
   try {
    const id = req.params.cityId
    const suggest = await Suggestion.findById(id)
    if(!suggest){
        return res.status(400).json({message:"bad request"})
    }
    return res.status(200).json({message:"suggestion for city", suggest})
   } catch (error) {
    return res.status(404).json({error: error.message})
   }

}

export {createSuggest, getCitySuggest}