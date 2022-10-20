import express  from "express";
import {createSuggest ,getCitySuggest} from "../controllers/SuggestController"

const stationRoute = express.Router()

stationRoute.post("/create", createSuggest)
stationRoute.get("/getbyCity/:cityId" , getCitySuggest)

export default stationRoute
