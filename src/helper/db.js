import { User } from "@/modal/user";
import mongoose from "mongoose";

const config = {
  isConnected: 0,
};

export const connectDB = async () => {
  if (config.isConnected) {
    return;
  }

  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });

    console.log("db connection established");
    config.isConnected = connection.readyState;

    //testing and creating work manager

    // const u1 = new User({
    //   name: "GM",
    //   email: "user@example.com",
    //   password: "password",
    //   about: "student",
    // });

    // await u1.save();

    console.log("user created");

    console.log(connection.host);
  } catch (error) {
    console.log(error);
    console.log("failed to connect");
  }
};
