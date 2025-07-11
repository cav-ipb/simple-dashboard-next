import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { userTableColumns } from "./columns";
import { User } from "@/types/user";

const Users: React.FC = () => {

    const users: User[] = [
        {id: 1, firstName: "John", lastName: "Doe", email:"johndoe@gmail.com", companyId: 1, company: {id: 1, name: "Company1"}}
    ]

    return (
        <div className="px-5 lg:px-20">
        <Card className="w-full">
            <CardHeader>
            <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
            <DataTable columns={userTableColumns} data={users} />
            </CardContent>
        </Card>
    </div>
    );
};

export default Users;

