const express = require("express");
const { getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API endpoints for managing products
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     description: Fetch all products from the database
 *     responses:
 *       200:
 *         description: List of products retrieved successfully
 *       500:
 *         description: Internal Server Error
 */
router.get("/", getProducts);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     description: Add a new product to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Iced Tea Matcha"
 *               price:
 *                 type: number
 *                 example: 20
 *               description:
 *                 type: string
 *                 example: "Tea with pistachio"
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad Request
 */
router.post("/", createProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product
 *     tags: [Products]
 *     description: Modify an existing product's details
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Tea Name"
 *               price:
 *                 type: number
 *                 example: 25
 *               description:
 *                 type: string
 *                 example: "Updated description"
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal Server Error
 */
router.put("/:id", updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     description: Remove a product from the database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal Server Error
 */
router.delete("/:id", deleteProduct);

module.exports = router; // ✅ Ensure router is exported correctly

