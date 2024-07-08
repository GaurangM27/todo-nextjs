import { httpsAxios } from "@/helper/httpHelper";

export async function signUp(user) {
  const res = await httpsAxios.post("/api/users", user);
  return res.data;
}
