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

export async function getTasksOfUser(id) {
  const res = await httpsAxios.get("/api/tasks");
  return res.data.filter((task) => task.userId === id);
}

export async function deleteTask(id) {
  try {
    const res = await httpsAxios.delete(`/api/tasks/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
