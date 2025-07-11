"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ChartNoAxesCombined, Sigma } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useReportsDetails } from "./use-report-details";
import { useLogin } from "@/hooks/use-login";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Report: React.FC = () => {

  const line = [
    { date: "2025-07-01", value: 3500 },
    { date: "2025-07-02", value: 4100 },
    { date: "2025-07-03", value: 3200 },
    { date: "2025-07-04", value: 5300 },
    { date: "2025-07-05", value: 4800 },
    { date: "2025-07-06", value: 5250 },
    { date: "2025-07-07", value: 4667 },
    { date: "2025-07-08", value: 4410 },
    { date: "2025-07-09", value: 5092 },
    { date: "2025-07-10", value: 5089 },
    { date: "2025-07-11", value: 5435 },
    { date: "2025-07-12", value: 5614 },
    { date: "2025-07-13", value: 4947 },
    { date: "2025-07-14", value: 4934 },
    { date: "2025-07-15", value: 4562 },
    { date: "2025-07-16", value: 4724 },
    { date: "2025-07-17", value: 5389 },
    { date: "2025-07-18", value: 4851 },
    { date: "2025-07-19", value: 4566 },
    { date: "2025-07-20", value: 4974 },
    { date: "2025-07-21", value: 4283 },
    { date: "2025-07-22", value: 3614 },
    { date: "2025-07-23", value: 2911 },
    { date: "2025-07-24", value: 2991 },
    { date: "2025-07-25", value: 2977 },
    { date: "2025-07-26", value: 3416 },
    { date: "2025-07-27", value: 2731 },
    { date: "2025-07-28", value: 3190 },
    { date: "2025-07-29", value: 3894 },
    { date: "2025-07-30", value: 3227 },
    { date: "2025-07-31", value: 3165 },
    { date: "2025-08-01", value: 3088 },
    { date: "2025-08-02", value: 3304 },
    { date: "2025-08-03", value: 3805 },
    { date: "2025-08-04", value: 4145 },
    { date: "2025-08-05", value: 4331 },
    { date: "2025-08-06", value: 3827 },
    { date: "2025-08-07", value: 3590 },
    { date: "2025-08-08", value: 3338 },
    { date: "2025-08-09", value: 3061 },
    { date: "2025-08-10", value: 3701 },
    { date: "2025-08-11", value: 3248 },
    { date: "2025-08-12", value: 2892 },
    { date: "2025-08-13", value: 2678 },
    { date: "2025-08-14", value: 2500 },
    { date: "2025-08-15", value: 3078 },
    { date: "2025-08-16", value: 2500 },
    { date: "2025-08-17", value: 2500 },
    { date: "2025-08-18", value: 2500 },
    { date: "2025-08-19", value: 2594 },
    { date: "2025-08-20", value: 2500 },
    { date: "2025-08-21", value: 2500 },
    { date: "2025-08-22", value: 2500 },
    { date: "2025-08-23", value: 2500 },
    { date: "2025-08-24", value: 2500 },
    { date: "2025-08-25", value: 2500 },
    { date: "2025-08-26", value: 2500 },
  ];

  const bar = [
    { category: "EMEA", value: 48000 },
    { category: "Americas", value: 53000 },
    { category: "APAC", value: 24000 },
  ];

  const {reports, report, getReports, getReport} = useReportsDetails();

    const {checkLogIn} = useLogin();
    useEffect(()=> {
      checkLogIn();
    }, [])

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="pt-16">
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Reports</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {reports.map((r) => (
                  <SidebarMenuItem key={r.id}>
                    <SidebarMenuButton onClick={() => getReport(r)} asChild>
                      <span>{r.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <div className="h-full w-full flex flex-col gap-5 px-5">
        <SidebarTrigger />
        <div className="w-full lg:w-1/2 flex gap-3">
          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Total</CardTitle>
                <CardAction>
                  <Sigma />
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>{report?.cards.total}</p>
              </CardContent>
            </Card>
          </div>
          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Average</CardTitle>
                <CardAction>
                  <ChartNoAxesCombined />
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>{report?.cards.average}</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <div className="w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Value Time-Series</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={report?.line}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 10 }}
                      angle={-45}
                      textAnchor="end"
                      height={70}
                    />
                    <YAxis fontSize={"12px"} />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: "12px" }} />
                    <Line dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <div className="w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Value by Category</CardTitle>
              </CardHeader>

              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={report?.bar}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="category"
                      tick={{ fontSize: 10 }}
                      angle={-45}
                      textAnchor="end"
                      height={70}
                    />
                    <YAxis />
                    <Legend wrapperStyle={{ fontSize: "12px" }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Report;
