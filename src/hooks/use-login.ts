"use client";

import { FakeUserService, IUserService } from "@/api/user-service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // replace this with dependency injection of the api service
  const service: IUserService = new FakeUserService();

  useEffect(() => {}, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    const user = await service.login(email, password);
    if (user) {
      document.cookie = `token=${user.password}`;
      user.password = "";
      localStorage.setItem("user", JSON.stringify(user));
      router.replace("/report");
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  const checkLogIn = () => {
    try {
      const storedValue = localStorage.getItem("user");
      if (storedValue === null) {
        router.replace("/login");
      }
    } catch (error) {
      router.replace("/login");
    }
  };

  return {
    loading,
    login,
    logout,
    checkLogIn,
  };
}
