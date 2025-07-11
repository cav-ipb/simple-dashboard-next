"use client";

import { useEffect, useState } from "react";
import { Report } from "@/types/report";
import { FakeReportService, IReportService } from "@/api/report-service";

export function useReports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [report, setReport] = useState<Report | null>(null);
  const [loadingAll, setLoadingAll] = useState<boolean>(false);
  const [loadingOperation, setLoadingOperation] = useState<boolean>(false);

  // replace this with dependency injection of the api service
  const service: IReportService = new FakeReportService();

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    setLoadingAll(true);
    const result = await service.all();
    console.log("brigingiiiiiin all");
    setReports(result);
    setLoadingAll(false);
    return result;
  };

  const deleteReport = async (id: number) => {
    setLoadingOperation(true);
    const success = await service.delete(id);
    setLoadingOperation(false);
    if (success) setReports(reports.filter((x) => x.id !== id));
  };

  const getReport = async (id: number) => {
    setLoadingOperation(true);
    const result = await service.get(id);
    setLoadingOperation(false);
    setReport(result);
  };

  const updateReport = async (id: number, item: Report) => {
    console.log("Updatiiing user");
    setLoadingOperation(true);

    let result = false;
    if (id > 0) result = await service.update(id, item);
    else result = await service.create(item);

    setLoadingOperation(false);

    setReport(null);
    if (result) await getReports();
  };

  return {
    reports,
    report,
    loadingAll,
    setReport,
    getReports,
    deleteReport,
    getReport,
    updateReport,
  };
}
