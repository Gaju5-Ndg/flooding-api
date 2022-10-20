import Data from "../modals/Data"

const createData = async(req, res)=>{
    try {
        const data = await Data.create(req.body)
        return res.status(200).json({message:"data are created",data})
    } catch (error) {
        return res.status(200).json({error:error.message})
    }
}

export default createData