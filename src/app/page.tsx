"use client";
import { Button } from "@/components/ui/button";
import { Line, LineChart } from "recharts";



export default function Home() {
  const data = [{name: "Page A", uv: 400}, {name: "Page A", uv: 200}];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Button>Click me</Button>
        <LineChart width={600} height={300} data={data}>
          <Line dataKey="uv" />
        </LineChart>
    </div>
  );
}
