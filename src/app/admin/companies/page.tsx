"use client";

import { DataTable } from "@/components/ui/data-table";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCompanies } from "./use-company";
import { Skeleton } from "@/components/ui/skeleton";
import { ColumnDef } from "@tanstack/react-table";
import { Company } from "@/types/company";
import { PencilIcon, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompanyForm } from "./form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLogin } from "@/hooks/use-login";
import { useEffect } from "react";

const Companies: React.FC = () => {
  const { checkLogIn } = useLogin();
  useEffect(() => {
    checkLogIn();
  }, []);

  const {
    companies,
    company,
    loading,
    getCompanies,
    setCompany,
    deleteCompany,
    getCompany,
    updateCompany,
  } = useCompanies();

  const companyTableColumns: ColumnDef<Company>[] = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-1">
            <Button
              className="bg-secondary text-blue hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-none"
              onClick={() => getCompany(row.getValue("id"))}
            >
              <PencilIcon />
            </Button>
            <Button
              className="bg-secondary text-red hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-none"
              onClick={() => deleteCompany(row.getValue("id"))}
            >
              <TrashIcon />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="px-5 lg:px-20">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Companies</CardTitle>
        </CardHeader>
        <CardContent>
          {loading && <Skeleton className="h-[20px] w-[100px] rounded-full" />}
          {!loading && (
            <DataTable columns={companyTableColumns} data={companies} />
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={() => setCompany({ id: 0, name: "" })}>
            <Plus /> Add
          </Button>
        </CardFooter>
      </Card>

      <Dialog
        open={company != null}
        onOpenChange={(open) => {
          if (!open) setCompany(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {company?.id > 0 ? "Edit company" : "Create company"}
            </DialogTitle>
          </DialogHeader>
          <CompanyForm
            onSubmit={(company) => updateCompany(company.id, company)}
            company={company}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Companies;
