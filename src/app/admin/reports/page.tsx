import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { reportTableColumns } from "./columns";
import { Report } from "@/types/report";

const Reports: React.FC = () => {

    const reports: Report[] = [
        {id: "1", name:"Sales", url:"sdf", companyId: 1, company: {id: 1, name: "Company1"}, public: true  }
    ]


    return (
        <div className="px-5 lg:px-20">
        <Card className="w-full">
            <CardHeader>
            <CardTitle>Reports</CardTitle>
            </CardHeader>
            <CardContent>
            <DataTable columns={reportTableColumns} data={reports} />
            </CardContent>
        </Card>
    </div>
    );
};

export default Reports;

