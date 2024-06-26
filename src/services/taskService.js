import { httpsAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  try {
    const mid = await httpsAxios.post("/api/tasks", task);
    const res = await mid.data;
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
}
