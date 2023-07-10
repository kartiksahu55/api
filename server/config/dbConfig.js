import mongoose from "mongoose";

// This function connects to the MongoDB database using the provided MONGODB_URL environment variable.
const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);

    console.log(
      `Database Connected Successfully with ${connect.connection.host}`
    );
  } catch (error) {
    console.log(`Database connection error: ${error.message}`);
  }
};

export default dbConnect;