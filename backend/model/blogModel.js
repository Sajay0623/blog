const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  image: { type: [String], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  adminId: { type: String, required: true },
});

const blogModel = mongoose.model("product", blogSchema);

module.exports = {
  blogModel,
};
