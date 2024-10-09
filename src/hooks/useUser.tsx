import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      console.log("한별");
    },
  });
};
