const Category = require("../models/category");
const slugify = require("slugify");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(401).send({
        message: "Name is Required",
      });
    }
    //check existing category
    const existingCategory = await Category.findOne({ name: name });
    if (existingCategory) {
      res.status(201).send({
        message: "Category Already Exists",
      });
    }
    const category = new Category({ name: name, slug: slugify(name) });
    await category.save();
    res.status(200).send({
      success: true,
      message: "Category Created Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Creating Category",
      error,
    });
  }
};

const getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories)
      res.status(200).send({
        success: true,
        message: "All Categories",
        categories,
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting All Categories",
      error,
    });
  }
};
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (category) {
      res.status(200).send({
        success: true,
        message: "Category Found",
        category,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting Category",
      error,
    });
  }
};
const getCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const category = await Category.findOne({ name: name });
    if (category) {
      res.status(200).send({
        success: true,
        message: "Category Found",
        category,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting Category",
      error,
    });
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Updated Category Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updating Category",
      error,
    });
  }
};
const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (category)
      res.status(200).send({
        success: true,
        message: "Category Deleted",
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Deleting Category",
      error,
    });
  }
};

module.exports = {
  createCategory,
  getCategory,
  getCategoryById,
  getCategoryByName,
  updateCategoryById,
  deleteCategoryById,
};
