const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middlewares/jwtMiddleware');

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *             required:
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
router.post('/register', userController.userRegister);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login an existing user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "gateau@gateau.com"
 *               password:
 *                 type: string
 *                 example: "gateau"
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login successful."
 */
router.post('/login', userController.userLogin);

/**
 * @swagger
 * /user/delete/{email}:
 *   delete:
 *     summary: Delete a user if authorized (token required)
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: email
 *         description: Email of the user to delete
 *         required: true
 *         schema:
 *           type: string
 *           example: "user@example.com"
 *     headers:
 *       Authorization:
 *         description: JWT token required
 *         schema:
 *           type: string
 *           example: "Bearer <JWT_TOKEN>"
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User deleted: user@example.com"
 */
router.delete('/user/delete/:email', verifyToken, userController.userDelete);

/**
 * @swagger
 * /user/update/{email}:
 *   put:
 *     summary: Update a user’s data if authorized (token required)
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: email
 *         description: Email of the user to update
 *         required: true
 *         schema:
 *           type: string
 *           example: "user@example.com"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "newuser@example.com"
 *               password:
 *                 type: string
 *                 example: "newpassword123"
 *             required:
 *               - email
 *               - password
 *     headers:
 *       Authorization:
 *         description: JWT token required
 *         schema:
 *           type: string
 *           example: "Bearer <JWT_TOKEN>"
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User updated successfully."
 */
router.put('/user/update/:email', verifyToken, userController.userUpdate);

/**
 * @swagger
 * /user/patch/{email}:
 *   patch:
 *     summary: Patch user data if authorized (token required)
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: email
 *         description: Email of the user to update
 *         required: true
 *         schema:
 *           type: string
 *           example: "user@example.com"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "patcheduser@example.com"
 *               password:
 *                 type: string
 *                 example: "patchedpassword123"
 *     headers:
 *       Authorization:
 *         description: JWT token required
 *         schema:
 *           type: string
 *           example: "Bearer <JWT_TOKEN>"
 *     responses:
 *       200:
 *         description: User data patched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User email updated: patcheduser@example.com"
 */
router.patch('/user/patch/:email', verifyToken, userController.userUpdate);

module.exports = router;
