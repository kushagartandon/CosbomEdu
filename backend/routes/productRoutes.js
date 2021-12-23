import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  public

router.get('/', asyncHandler(async(req,res) => {
    const products = await Product.find({})
    // const products = await Product.find({})
    res.json(products)
}))

// @desc    Fetch single products
// @route   GET /api/products/:id
// @access  public
router.get('/:id', asyncHandler(async(req,res) => {
    // const product = await products.find(p => p._id === req.params.id)
    const product = await Product.findById(req.params.id)
    res.json(product)
}))
export default router