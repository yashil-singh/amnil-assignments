import { Job } from "../../lib/types";
import { GET } from "../api";

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await GET("/jobs");
  return response;
};

export const fetchJobById = async (id: string): Promise<Job> => {
  const params = new URLSearchParams();
  params.append("id", id);
  const response = await GET("/jobs", params);
  return response[0];
};
