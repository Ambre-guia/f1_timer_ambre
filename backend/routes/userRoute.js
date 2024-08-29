const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middlewares/jwtMiddleware');

/**
 * @swagger
 * /users/register:
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
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
router.post('/user/register', userController.userRegister);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Connecte un utilisateur existant.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: gateau@gateau.com
 *             password: "gateau"
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               message: 'Connexion réussie.'
 */
router.post('/user/login', userController.userLogin);

/**
 * @swagger
 * /user/delete/{email}:
 *   delete:
 *     summary: Supprime un utilisateur s'il a l'autorisation nécessaire (token).
 *     headers:
 *       Authorization:
 *         description: JWT_KEY
 *     parameters:
 *       - in: path
 *         name: email
 *         description: L'adresse e-mail de l'utilisateur à supprimer.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               message: 'Utilisateur supprimé : ${user.email}'
 */
router.delete('/user/delete/:email', verifyToken, userController.userDelete);

/**
 * @swagger
 * /user/update/{email}:
 *   put:
 *     summary: Modifie les données d'un utilisateur s'il a l'autorisation nécessaire (token).
 *     headers:
 *       Authorization:
 *         description: JWT_KEY
 *     parameters:
 *       - in: path
 *         name: email
 *         description: L'adresse e-mail de l'utilisateur à mettre à jour.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: gateau@gateau.com
 *             password: "gateau"
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               message: 'ok'
 */
router.put('/user/update/:email', verifyToken, userController.userUpdate);

/**
 * @swagger
 * /user/patch/{email}:
 *   patch:
 *     summary: Modifie les données d'un utilisateur s'il a l'autorisation nécessaire (token).
 *     headers:
 *       Authorization:
 *         description: JWT_KEY
 *     parameters:
 *       - in: path
 *         name: email
 *         description: L'adresse e-mail de l'utilisateur à mettre à jour.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: gateau@gateau.com
 *             password: "gateau"
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               message: 'L\'email de l\'utilisateur a été modifié: ${user.email}'
 */
router.patch('/user/patch/:email', verifyToken, userController.userUpdate);

module.exports = router;
