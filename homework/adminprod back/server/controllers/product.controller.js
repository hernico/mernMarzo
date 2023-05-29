const Products = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Products.find()
      .then(allDaProducts => res.json({ Product: allDaProducts }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.findOneSingleProducts = (req, res) => {
    Products.findOne({ _id: req.params.id })
		.then(oneSingleProducts => res.json({ Products: oneSingleProducts }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProducts = (req, res) => {
  Products.create(req.body)
      .then(newlyCreatedProducts => res.json({ Product: newlyCreatedProducts }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.updateExistingProducts = (req, res) => {
    Products.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedProducts => res.json({ Product: updatedProducts }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.deleteAnExistingProducts = (req, res) => {
    Products.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  