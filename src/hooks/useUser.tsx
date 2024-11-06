import { useQuery } from "@tanstack/react-query";
import api from "../lib/api/nestClient";
import { useEffect } from "react";

export const useUser = () => {
  const {
    data,
    isLoading,
    error,
    refetch: refetchUserData,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return await api.get("/auth/profile").then((r) => r.data);
    },
  });

  const logout = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };

  useEffect(() => {
    if (error && localStorage.getItem("access_token")) {
      logout();
    }
  }, [error]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      if (localStorage.getItem("access_token")) {
        refetchUserData();
      }
    });
  }, [refetchUserData]);

  return {
    data,
    isLoading,
    logout,
    refetchUserData,
  };
};
