import express from "express"
import connect from "./src/database/connect"
import stationRoute from "./src/routes/stationRoute"

const app = express()


app.use(express.json())
app.use("/station", stationRoute)

const port = 3000
connect()
app.listen(port,()=>{

    console.log(`server is running on http://localhost: ${port}`);

})

