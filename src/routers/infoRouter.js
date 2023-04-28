const express = require('express');
const infoController = require('../controllers/infoController.js');


const router = express.Router();

router.get('/info/label-qualite', infoController.labelRender);
router.get('/info/permis-1e', infoController.permisEuroRender);
router.get('/info/reglement-interieur', infoController.reglementRender);
router.get('/info/contrat-type', infoController.contratRender);
router.get('/info/procede-evaluation-b', infoController.evalBRender);
router.get('/info/procede-evaluation-a', infoController.evalARender);
router.get('/info/formation-et-examen-cat-b', infoController.examBRender);
router.get('/info/formation-et-examen-cat-a', infoController.examARender);
router.get('/info/horaires-cours-theorique', infoController.horaireTheorieRender);
router.get('/info/theorie-generale', infoController.theorieGRender);
router.get('/info/theorie-specifique-2-roues', infoController.theorieSpeRender);
router.get('/info/plan-formation-cat-b', infoController.planBRender);
router.get('/info/plan-formation-cat-a', infoController.planArender);
router.get('/info/piste-formation-2-roues', infoController.piste2RouesRender);
router.get('/info/formation-personnes-handicape', infoController.handicapRender);




module.exports = router