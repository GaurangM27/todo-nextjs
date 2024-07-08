import { httpsAxios } from "@/helper/httpHelper";

export async function logingIn(loginData) {
  const res = await httpsAxios.post("/api/login", loginData);
  return res.data;
}

export async function currentUser() {
  const res = await httpsAxios.get("/api/current");
  return res.data;
}

export async function logingOut() {
  const res = await httpsAxios.post("/api/logout");
  return res.data;
}
