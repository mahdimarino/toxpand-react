import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navbar } from "../header/navbar";

// If you're using TypeScript with React Router v6
interface MetaArgs {
  params?: Record<string, string>;
  location?: Location;
}

export function meta({ }: MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function EngagementTactics() {
  return (
    <>
      <Navbar />
      <Welcome />
    </>
  );
}