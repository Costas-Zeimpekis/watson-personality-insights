const PersonalityInsightsV3 = require("ibm-watson/personality-insights/v3");
const { IamAuthenticator } = require("ibm-watson/auth");

const personalityInsights = new PersonalityInsightsV3({
  version: "2017-10-13",
  authenticator: new IamAuthenticator({
    apikey: "TRfzznpZsbdeM7RK1WSWWbbltkOpAXFa_qPXGidJr91y",
  }),
  url:
    "https://api.eu-gb.personality-insights.watson.cloud.ibm.com/instances/123fe46d-98c1-4864-80ff-3f6ba3785dc8",
});

const profileParams = {
  // Get the content from the JSON file.
  content: require("./data/profile.json"),
  contentType: "application/json",
  consumptionPreferences: true,
  rawScores: true,
};

personalityInsights
  .profile(profileParams)
  .then((profile) => {
    console.log(JSON.stringify(profile, null, 2));
  })
  .catch((err) => {
    console.log("error:", err);
  });
