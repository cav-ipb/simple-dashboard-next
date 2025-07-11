"use client";

import { Button } from "@/components/ui/button";
import { Company } from "@/types/company";
import { ColumnDef } from "@tanstack/react-table"
import { PencilIcon, TrashIcon } from "lucide-react";
 
export const companyTableColumns: ColumnDef<Company>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
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