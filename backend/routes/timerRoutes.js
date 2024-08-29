const express = require('express');
const router = express.Router();
const timerController = require('../controllers/timerController');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * /timers/create:
 *   post:
 *     summary: Crée un nouveau timer.
 *     description: Crée un nouveau timer pour un utilisateur authentifié.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               time:
 *                 type: number
 *                 description: Temps du timer en millisecondes.
 *                 example: 3000
 *     responses:
 *       201:
 *         description: Timer créé avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID du timer.
 *                   example: "60d1f4b5f1c9b3c7e8f6a1b2"
 *                 time:
 *                   type: number
 *                   description: Temps du timer.
 *                   example: 3000
 *       401:
 *         description: Non autorisé. Authentification requise.
 *       500:
 *         description: Erreur du serveur.
 */
router.post('/create', authMiddleware, timerController.createTimer);

/**
 * @swagger
 * /timers/best-time:
 *   get:
 *     summary: Récupère le meilleur temps pour l'utilisateur.
 *     description: Récupère le meilleur temps enregistré pour l'utilisateur authentifié.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Meilleur temps récupéré avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 time:
 *                   type: number
 *                   description: Meilleur temps en millisecondes.
 *                   example: 2000
 *       401:
 *         description: Non autorisé. Authentification requise.
 *       500:
 *         description: Erreur du serveur.
 */
router.get('/best-time', authMiddleware, timerController.getBestTime);

module.exports = router;
