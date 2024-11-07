import { Router } from "express";
import { calculateAndStoreInsights, createActivity } from "../Controllers/activityController.js";

const activiteRouter = Router()

activiteRouter.route('/customer-activity').post(createActivity)
activiteRouter.route('/get-customer-activity').get(calculateAndStoreInsights)


export {activiteRouter}

