const express = require('express');
const inscriptionController = require('../controllers/inscriptionController.js');


const router = express.Router();

router.get('/inscription/permis-b-traditionnelle', inscriptionController.bTradRender);
router.get('/inscription/permis-b-accompagnee', inscriptionController.bAccpRender);
router.get('/inscription/permis-b-supervisee', inscriptionController.bSupvRender);
router.get('/inscription/permis-a1', inscriptionController.a1Render);
router.get('/inscription/permis-a2', inscriptionController.a2Render);
router.get('/inscription/permis-am', inscriptionController.amRender);
router.get('/inscription/a2-vers-a', inscriptionController.a2aRender);
router.get('/inscription/b78-vers-b', inscriptionController.b78bRender);

module.exports = router