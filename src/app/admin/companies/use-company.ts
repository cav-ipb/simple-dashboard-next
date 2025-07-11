"use client";

import { FakeCompanySerivce, ICompanyService } from "@/api/company-service";
import { Company } from "@/types/company";
import { useEffect, useState } from "react";

export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [company, setCompany] = useState<Company | null>(null);
  const [loadingAll, setLoadingAll] = useState<boolean>(false);
  const [loadingOperation, setLoadingOperation] = useState<boolean>(false);

  // replace this with dependency injection of the api service
  const service: ICompanyService = new FakeCompanySerivce();

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    setLoadingAll(true);
    const result = await service.all();
    setCompanies(result);
    setLoadingAll(false);
    return result;
  };

  const deleteCompany = async (id: number) => {
    setLoadingOperation(true);
    const success = await service.delete(id);
    setLoadingOperation(false);
    if (success) setCompanies(companies.filter((x) => x.id !== id));
  };

  const getCompany = async (id: number) => {
    setLoadingOperation(true);
    const result = await service.get(id);
    setLoadingOperation(false);
    setCompany(result);
  };

  const updateCompany = async (id: number, item: Company) => {
    setLoadingOperation(true);

    let result = false;
    if (id > 0) result = await service.update(id, item);
    else result = await service.create(item);

    setLoadingOperation(false);

    setCompany(null);
    if (result) await getCompanies();
  };

  return {
    companies,
    company,
    loading: loadingAll,
    setCompany,
    getCompanies,
    deleteCompany,
    getCompany,
    updateCompany,
  };
}
