import { Job } from "../../lib/types";
import { GET, POST } from "../api";

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await GET("/jobs");
  return response;
};

export const fetchSavedJobs = async (): Promise<Job[]> => {
  return await GET("/jobs/saved");
};

export const fetchJobById = async (id: string): Promise<Job> => {
  const params = new URLSearchParams();
  params.append("id", id);
  const response = await GET("/jobs", params);
  return response[0];
};

export const toggleSave = async (
  id: string,
): Promise<{ message: string; job: Job }> => {
  const response = await POST(`/jobs/toggle-save/${id}`);
  return response;
};

export const getSavedJobs = async (): Promise<Job[]> => {
  const response = await GET("/jobs/saved");
  return response;
};
