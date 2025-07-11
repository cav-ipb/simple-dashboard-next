"use client";

import { FakeUserService, IUserService } from "@/api/user-service";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loadingAll, setLoadingAll] = useState<boolean>(false);
  const [loadingOperation, setLoadingOperation] = useState<boolean>(false);

  // replace this with dependency injection of the api service
  const service: IUserService = new FakeUserService();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setLoadingAll(true);
    const result = await service.all();
    console.log("brigingiiiiiin all");
    setUsers(result);
    setLoadingAll(false);
    return result;
  };

  const deleteUser = async (id: number) => {
    setLoadingOperation(true);
    const success = await service.delete(id);
    setLoadingOperation(false);
    if (success) setUsers(users.filter((x) => x.id !== id));
  };

  const getUser = async (id: number) => {
    setLoadingOperation(true);
    const result = await service.get(id);
    setLoadingOperation(false);
    setUser(result);
  };

  const updateUser = async (id: number, item: User) => {
    console.log("Updatiiing user");
    setLoadingOperation(true);

    let result = false;
    if (id > 0) result = await service.update(id, item);
    else result = await service.create(item);

    setLoadingOperation(false);

    setUser(null);
    if (result) await getUsers();
  };

  return {
    users,
    user,
    loadingAll,
    setUser,
    getUsers,
    deleteUser,
    getUser,
    updateUser,
  };
}
