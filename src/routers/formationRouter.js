const express = require('express');
const formationController = require('../controllers/formationController.js');


const router = express.Router();

router.get('/formation/permis-b-traditionnelle', formationController.bTradRender);
router.get('/formation/permis-b-accompagnee', formationController.bAccpRender);
router.get('/formation/permis-b-supervisee', formationController.bSupvRender);
router.get('/formation/permis-a1', formationController.a1Render);
router.get('/formation/permis-a2', formationController.a2Render);
router.get('/formation/permis-am', formationController.amRender);
router.get('/formation/a2-vers-a', formationController.a2aRender);
router.get('/formation/b78-vers-b', formationController.b78bRender);
router.get('/formation/perfectionnement', formationController.perfectRender);



module.exports = router