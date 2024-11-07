import { Schema, model } from "mongoose";

const activityInsight = new Schema({
    mostActiveArea: {
        area: {
            type: String,
            required: true
        },
        activity_type: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true
        },
        totalDwellTime: {
            type: Number,
            required: true
        }
    },
    leastActiveArea: {
        area: {
            type: String,
            required: true
        },
        activity_type: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true
        },
        totalDwellTime: {
            type: Number,
            required: true
        }
    },
    peakHour: {
        hour: {
            type: Number,
            required: true
        },
        count: {
            type: Number,
            required: true
        },
        totalDwellTime: {
            type: Number,
            required: true
        }
    }
})


const ActivityInsight = model("Insights", activityInsight)

export default ActivityInsight