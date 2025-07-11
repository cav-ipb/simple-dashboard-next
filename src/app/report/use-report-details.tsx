"use client";

import { useEffect, useState } from "react";
import { Report, ReportDetails } from "@/types/report";
import { FakeReportService, IReportService } from "@/api/report-service";

export function useReportsDetails() {
  const [reports, setReports] = useState<Report[]>([]);
  const [report, setReport] = useState<ReportDetails | null>(null);
  const [loadingAll, setLoadingAll] = useState<boolean>(false);
  const [loadingOperation, setLoadingOperation] = useState<boolean>(false);

  // replace this with dependency injection of the api service
  const service: IReportService = new FakeReportService();

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    setLoadingAll(true);
    const result = await service.getUserReports(1);
    setReports(result);
    setLoadingAll(false);
    return result;
  };


  const getReport = async (report: Report) => {
    setLoadingOperation(true);
    try {
      const response = await fetch(`/data/${report.filename}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setReport(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
    setLoadingOperation(false);
  };


  return {
    reports,
    report,
    loadingAll,
    getReports,
    getReport,
  };
}
