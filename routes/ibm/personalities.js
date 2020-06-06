const express = require("express");
const PersonalityInsightsV3 = require("ibm-watson/personality-insights/v3");
const { IamAuthenticator } = require("ibm-watson/auth");

const router = express.Router();

const personalityInsights = new PersonalityInsightsV3({
  version: "2017-10-13",
  authenticator: new IamAuthenticator({
    apikey: "TRfzznpZsbdeM7RK1WSWWbbltkOpAXFa_qPXGidJr91y"
  }),
  url:
    "https://api.eu-gb.personality-insights.watson.cloud.ibm.com/instances/123fe46d-98c1-4864-80ff-3f6ba3785dc8"
});

const profileParams = {
  // Get the content from the JSON file.
  content: require("../../data/profile.json"),
  contentType: "application/json",
  consumptionPreferences: true,
  rawScores: true
};

router.get("/", async (req, res) => {
  const watson = await personalityInsights.profile(profileParams);
  const response = JSON.stringify(watson, null, 2);

  res.json(response);
});

module.exports = router;
