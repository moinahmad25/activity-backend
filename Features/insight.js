import ActivityInsight from "../Model/Insight.model.js";
import ActivityModel from "../Model/Activity.model.js";


const calculateInsights = async () => {
    const activities = await ActivityModel.find();
  
    let mostActiveArea = { area: "", count: 0, activity_type: "", totalDwellTime: 0 };
    let leastActiveArea = { area: "", count: 0, activity_type: "", totalDwellTime: Infinity };
    let peakHour = { hour: 0, count: 0, totalDwellTime: 0 };
  
    const hourData = {}; // To store activities per hour
  
    activities.forEach((activity) => {
      const hour = new Date(activity.timestamp).getHours();
      const area = activity.area;
      const activity_type = activity.activity_type
      const dwellTime = activity.dwell_time_seconds;
  
      // Track activities by hour
      if (!hourData[hour]) {
        hourData[hour] = { count: 0, totalDwellTime: 0 };
      }
      hourData[hour].count += 1;
      hourData[hour].totalDwellTime += dwellTime;
  
      // Most Active Area
      if (mostActiveArea.totalDwellTime < dwellTime) {
        mostActiveArea = { area, count: 1, activity_type, totalDwellTime: dwellTime };
      } else if (mostActiveArea.area === area) {
        mostActiveArea.count += 1;
        mostActiveArea.totalDwellTime += dwellTime;
      }
  
      // Least Active Area
      if (leastActiveArea.totalDwellTime > dwellTime) {
        leastActiveArea = { area, count: 1, activity_type, totalDwellTime: dwellTime };
      } else if (leastActiveArea.area === area) {
        leastActiveArea.count += 1;
        leastActiveArea.totalDwellTime += dwellTime;
      }
    });
  
    // Peak Hour Calculation
    for (let hour in hourData) {
      const { count, totalDwellTime } = hourData[hour];
      if (peakHour.totalDwellTime < totalDwellTime) {
        peakHour = { hour: parseInt(hour), count, totalDwellTime };
      }
    }
  
    return { mostActiveArea, leastActiveArea, peakHour };
  };
  
  // Function to store the insights
  const storeCalculatedInsights = async (insights) => {
    try {
      const newInsight = new ActivityInsight(insights); 
      await newInsight.save();
      console.log("Insights stored successfully.");
    } catch (error) {
      console.error("Error storing insights: ", error);
    }
  };

export {storeCalculatedInsights, calculateInsights}