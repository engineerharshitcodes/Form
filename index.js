const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");


dotenv.config();

const app = express();
// middleware
app.use(express.json());

connectDB();

// routes
app.use("/api/form", require("./routes/submit"));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


