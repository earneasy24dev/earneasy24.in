import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";

export const useUser = () => {
  return useQuery(["user"], async () => {
    const { data } = await axios.get("/me");
    return data;
  });
};

