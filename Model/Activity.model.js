import { Schema, model } from "mongoose";

const activitySchema = new Schema({
    customer_id: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date
    },
    area: {
        type: String,
        required: true
    },
    activity_type: {
        type: String,
        required: true
    },
    dwell_time_seconds: {
        type: Number,
        required: true
    },
    coordinates: {
        x: {
            type: Number,
            required: true
        },
        y: {
            type: Number,
            required: true
        }
    }
})


const ActivityModel = model("Activity", activitySchema)

export default ActivityModel