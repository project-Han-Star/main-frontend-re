import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useRoleStore from "../lib/store/useRoleStore";
import nestClient from "../lib/api/nestClient";

export const useUser = () => {
  const navigate = useNavigate();
  const { role, setRole } = useRoleStore();
  const {
    data,
    isLoading,
    error,
    refetch: refetchUserData,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const user = await nestClient.get("/auth/profile").then((r) => r.data);
      setRole(user.role);
      return user;
    },
  });

  const logout = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };

  useEffect(() => {
    if (role === "lawyer") navigate("/lawyer");
    else if (role === "applicant") navigate("/board");
  }, [role, navigate]);

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
