const express = require('express');
const tarifController = require('../controllers/tarifController.js');


const router = express.Router();

router.get('/tarif/permis-b-traditionnelle', tarifController.bTradRender);
router.get('/tarif/permis-b-accompagnee', tarifController.bAccpRender);
router.get('/tarif/permis-b-supervisee', tarifController.bSupvRender);
router.get('/tarif/permis-a1', tarifController.a1Render);
router.get('/tarif/permis-a2', tarifController.a2Render);
router.get('/tarif/permis-am', tarifController.amRender);
router.get('/tarif/a2-vers-a', tarifController.a2aRender);
router.get('/tarif/b78-vers-b', tarifController.b78bRender);
router.get('/tarif/perfectionnement', tarifController.perfectRender);



module.exports = router