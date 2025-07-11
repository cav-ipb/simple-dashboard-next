"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Report } from "@/types/report";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { PencilIcon, Plus, TrashIcon } from "lucide-react";
import { useReports } from "./use-reports";
import { useCompanies } from "../companies/use-company";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReportForm } from "./form";

const Reports: React.FC = () => {
  const reportTableColumns: ColumnDef<Report>[] = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "companyId",
      header: "Company",
    },
    {
      accessorKey: "public",
      header: "Public",
      cell: ({ row }) => {
        return <Checkbox checked={row.getValue("public")} />;
      },
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-1">
            <Button
              className="bg-secondary text-blue hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-none"
              onClick={() => getReport(row.getValue("id"))}
            >
              <PencilIcon />
            </Button>
            <Button
              className="bg-secondary text-red hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-none"
              onClick={() => deleteReport(row.getValue("id"))}
            >
              <TrashIcon />
            </Button>
          </div>
        );
      },
    },
  ];

  const { companies } = useCompanies();

  const {
    reports,
    report,
    loadingAll,
    setReport,
    getReport,
    getReports,
    deleteReport,
    updateReport,
  } = useReports();

  return (
    <div className="px-5 lg:px-20">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Reports</CardTitle>
        </CardHeader>
        <CardContent>
          {loadingAll && (
            <Skeleton className="h-[20px] w-[100px] rounded-full" />
          )}
          {!loadingAll && (
            <DataTable columns={reportTableColumns} data={reports} />
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={() =>
              setReport({
                id: 0,
                name: "",
                filename: "",
                public: false,
                companyId: 0,
              })
            }
          >
            <Plus /> Add
          </Button>
        </CardFooter>
      </Card>

      <Dialog
        open={report != null}
        onOpenChange={(open) => {
          if (!open) setReport(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {report?.id > 0 ? "Edit report" : "Create report"}
            </DialogTitle>
          </DialogHeader>
          <ReportForm
            onSubmit={(report) => updateReport(report.id, report)}
            report={report}
            companies={companies}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Reports;
