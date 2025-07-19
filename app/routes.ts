import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("GlobalReach", "routes/globalReach.tsx"),
    route("About", "routes/about.tsx"),
    route("Fandq", "routes/f&q.tsx"),


] satisfies RouteConfig;

