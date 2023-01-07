const Product = require("../model/product");

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.find();

    res.status(200).json();
  } catch (err) {
    next(err);
  }
};
