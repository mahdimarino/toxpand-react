import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("GlobalReach", "routes/globalReach.tsx"),
    route("About", "routes/about.tsx"),
    route("Fandq", "routes/f&q.tsx"),
    route("ScoreCard","routes/piplineScorecard.tsx"),
    route("HomePage","routes/homePage.tsx"),



] satisfies RouteConfig;

