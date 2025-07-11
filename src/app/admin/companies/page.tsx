import { DataTable } from "@/components/ui/data-table";
import { Company } from "@/types/company";
import { companyTableColumns } from "./columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Companies: React.FC = () => {
  const companies: Company[] = [{ id: 1, name: "Company1" }];

  return (
    <div className="px-5 lg:px-20">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Companies</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={companyTableColumns} data={companies} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Companies;
