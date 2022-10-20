import Stations from "../modals/Stations"

const stationCreate = async(req, res)=>{
    try {
        const stations = await Stations.create(req.body)
        return res.status(200).json({message:"stations created ",stations})
        
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

export default {stationCreate}