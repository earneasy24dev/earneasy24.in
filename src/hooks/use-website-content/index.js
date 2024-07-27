import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";

export const useWebsiteContent = () => {
  return useQuery(["websiteContent"], async () => {
    const { data } = await axios.get("getWebsiteContent");
    return data?.content;
  });
};
