"use client";
import { Button } from "@/components/ui/button";
import { Line, LineChart } from "recharts";
import Report from "./report/page";



export default function Home() {
  const data = [{name: "Page A", uv: 400}, {name: "Page A", uv: 200}];
  return (
    <Report/>
  );
}
