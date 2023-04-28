const express = require('express');
const fabricationController = require('../controllers/fabricationController.js');


const router = express.Router();

router.get('/fabrication/permis-b-traditionnelle', fabricationController.bTradRender);
router.get('/fabrication/permis-b-accompagnee', fabricationController.bAccpRender);
router.get('/fabrication/permis-b-supervisee', fabricationController.bSupvRender);
router.get('/fabrication/permis-a1', fabricationController.a1Render);
router.get('/fabrication/permis-a2', fabricationController.a2Render);


module.exports = router