const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        required: true,
        trim: true
    },
    mail:{
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    companyName: {
      type: String,
      required: true,
      trim: true
    },
    website: {
      type: String,
      required: true,
      trim: true
    },
    businessCategory: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", formSchema);
