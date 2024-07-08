"use client";
import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { currentUser } from "@/services/loginService";
import { toast } from "react-toastify";

export default function Provider({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function load() {
      try {
        const data = await currentUser();
        console.log("User data: ", data);
        setUser({ ...data });
      } catch (error) {
        console.log(error);
        toast.info("User not logged in. Please log in", {
          position: "top-center",
        });
        setUser(undefined);
      }
    }
    load();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
