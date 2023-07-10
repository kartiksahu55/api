import app from "./app.js";
import dbConnect from "../config/dbConfig.js";

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

(async () => {
  // Establish database connection
  await dbConnect();

  // Handle server errors
  app.on("error", (err) => {
    console.log(err.message);
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
  });
})();
