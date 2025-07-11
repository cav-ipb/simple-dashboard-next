"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { User } from "@/types/user";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { PencilIcon, Plus, TrashIcon } from "lucide-react";
import { useUsers } from "./use-users";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UserForm } from "./form";
import { useCompanies } from "../companies/use-company";

const Users: React.FC = () => {
  const {
    users,
    user,
    loadingAll,
    getUsers,
    setUser,
    deleteUser,
    getUser,
    updateUser,
  } = useUsers();

  const { companies } = useCompanies();

  const userTableColumns: ColumnDef<User>[] = [
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
      accessorKey: "companyId",
      header: "Company",
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-1">
            <Button
              className="bg-secondary text-blue hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-none"
              onClick={() => getUser(row.getValue("id"))}
            >
              <PencilIcon />
            </Button>
            <Button
              className="bg-secondary text-red hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-none"
              onClick={() => deleteUser(row.getValue("id"))}
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
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          {loadingAll && (
            <Skeleton className="h-[20px] w-[100px] rounded-full" />
          )}
          {!loadingAll && <DataTable columns={userTableColumns} data={users} />}
        </CardContent>
        <CardFooter>
          <Button
            onClick={() =>
              setUser({
                id: 0,
                firstName: "",
                lastName: "",
                email: "",
                companyId: 0,
              })
            }
          >
            <Plus /> Add
          </Button>
        </CardFooter>
      </Card>

      <Dialog
        open={user != null}
        onOpenChange={(open) => {
          if (!open) setUser(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {user?.id > 0 ? "Edit user" : "Create user"}
            </DialogTitle>
          </DialogHeader>
          <UserForm
            onSubmit={(user) => updateUser(user.id, user)}
            user={user}
            companies={companies}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Users;
