"use client";

import { Button } from "@/components/ui/button";
import { User } from "@/types/user";
import { ColumnDef } from "@tanstack/react-table"
import { PencilIcon, TrashIcon } from "lucide-react";
 
export const userTableColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "company.name",
     header: "Company",
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