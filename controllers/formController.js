const Form = require("../models/form");

exports.createForm = async (req, res) => {
  try {
    const { name,mail, companyName, website, businessCategory } = req.body;

    // basic validation
    if (!name || !mail || !companyName || !website || !businessCategory) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }
     const data = await Form.create({
      mail,
      companyName,
      website,
      businessCategory
    });


    res.status(201).json({
      success: true,
      message: "Form data received successfully",
      data: {
        name,
        mail,
        companyName,
        website,
        businessCategory
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};
