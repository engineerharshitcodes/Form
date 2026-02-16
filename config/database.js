const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect to MongoDB...");
     await mongoose.connect(process.env.MONGO_URL);
  //  console.log("Trying to connect to MongoDB...");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;   // ✅ THIS LINE IS CRITICAL
