const mongoose = require('mongoose');
const productSchema = require('../migration/ProductSchema.json');
const ProductSchema = new mongoose.Schema(productSchema);
module.exports = mongoose.model("Product",ProductSchema)