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
      name,
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

// GET all with filters
exports.getForms = async (req, res) => {
  try {
    const {
      name,
      mail,
      companyName,
      businessCategory,
      page = 1,
      limit = 10
    } = req.query;

    // build dynamic filter object
    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    if (mail) {
      filter.mail = { $regex: mail, $options: "i" };
    }

    if (companyName) {
      filter.companyName = { $regex: companyName, $options: "i" };
    }

    if (businessCategory) {
      filter.businessCategory = businessCategory;
    }

    const skip = (page - 1) * limit;

    const data = await Form.find(filter)
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Form.countDocuments(filter);

    res.status(200).json({
      success: true,
      total,
      page: Number(page),
      limit: Number(limit),
      data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};


// GET single form by ID
exports.getFormById = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Form.findById(id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Form not found"
      });
    }

    res.status(200).json({
      success: true,
      data
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid ID",
      error: error.message
    });
  }
};
