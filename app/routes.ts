import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    index("routes/homePage.tsx"), 
    route("GlobalReach", "routes/globalReach.tsx"),
    route("About", "routes/about.tsx"),
    route("Fandq", "routes/f&q.tsx"),
    route("ScoreCard","routes/piplineScorecard.tsx"),
   // route("HomePage","routes/homePage.tsx"),
    route("RoiCalculator","routes/roiCalculator.tsx"),
    route("RealTimeInsights","routes/realTimeInsights.tsx"),
    route("EngagementTactics","routes/engagement_tactics.tsx"),
    route("RequestProposal","routes/requestProposal.tsx"),
    route("Contact","routes/contact.tsx"),




    




] satisfies RouteConfig;

