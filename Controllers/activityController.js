import ActivityModel from "../Model/Activity.model.js";
import ActivityInsight from "../Model/Insight.model.js";
import  {storeCalculatedInsights, calculateInsights} from "../Features/insight.js";

const createActivity = async (req, res) => {
    // temporarily taking the JSON from the body, I know that seems like traditional and not necessary but this is temporary
  const activities = req.body;

  try {

    // creating a new instance to insert many docs at ones and return the response
    const newActivites = await ActivityModel.insertMany(activities);

    res
      .status(201)
      .json({
        message: "Activity Created Successfully!!!",
        activities: newActivites,
      });
  } catch (error) {
    console.log("Error found: ", error);
    res.status(500).json({ message: "Something went wrong!!!!", error });
  }
};

// Controller fo calculating insights
const calculateAndStoreInsights = async (req, res) => {
  try {
    const insights = await calculateInsights();
    await storeCalculatedInsights(insights);

    res.status(200).json({
      message: "Insights calculated and stored successfully!",
      insights,
    });
  } catch (error) {
    console.log("Error in calculating or storing insights:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};



export { createActivity, calculateAndStoreInsights };
