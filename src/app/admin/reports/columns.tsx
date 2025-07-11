"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Report } from "@/types/report";
import { ColumnDef } from "@tanstack/react-table"
import { PencilIcon, TrashIcon } from "lucide-react";
 
export const reportTableColumns: ColumnDef<Report>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "company.name",
    header: "Company"
  },
  {
    accessorKey: "public",
    header: "Public",
    cell: ({ row }) => {
      return <Checkbox checked={row.getValue("public")}/>
    }
  },
  {
    header:"Actions",
    cell: ({ row }) => {
 
      return (
        <div className="flex gap-1">
            <Button className="bg-secondary text-blue hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-none" onClick={() => console.log(row)}>
                    <PencilIcon/>
            </Button>
            <Button className="bg-secondary text-red hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-none" onClick={() => console.log(row)}>
                    <TrashIcon/>
            </Button>
        </div>
      )
    },
  }
]