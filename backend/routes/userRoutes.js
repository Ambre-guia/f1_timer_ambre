const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * /users/dashboard:
 *   get:
 *     summary: Récupère les informations du tableau de bord de l'utilisateur.
 *     description: Récupère les informations du tableau de bord pour l'utilisateur authentifié.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Informations du tableau de bord récupérées avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       description: Adresse email de l'utilisateur.
 *                       example: user@example.com
 *                     role:
 *                       type: string
 *                       description: Rôle de l'utilisateur (admin ou user).
 *                       example: user
 *       401:
 *         description: Non autorisé. Authentification requise.
 *       500:
 *         description: Erreur du serveur.
 */
router.get('/dashboard', authMiddleware, userController.getUser);

module.exports = router;
