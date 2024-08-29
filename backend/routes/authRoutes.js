const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Enregistre un nouvel utilisateur.
 *     description: Crée un nouvel utilisateur dans le système.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Adresse email de l'utilisateur.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: Mot de passe de l'utilisateur.
 *                 example: password123
 *     responses:
 *       201:
 *         description: Utilisateur enregistré avec succès.
 *       400:
 *         description: Requête invalide ou données manquantes.
 *       500:
 *         description: Erreur du serveur.
 */
router.post('/register', authController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connecte un utilisateur existant.
 *     description: Authentifie un utilisateur et retourne un token d'accès.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Adresse email de l'utilisateur.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: Mot de passe de l'utilisateur.
 *                 example: password123
 *     responses:
 *       200:
 *         description: Connexion réussie et token d'accès retourné.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token d'accès pour les requêtes authentifiées.
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 *       401:
 *         description: Authentification échouée. Vérifiez les informations de connexion.
 *       500:
 *         description: Erreur du serveur.
 */
router.post('/login', authController.login);

module.exports = router;
