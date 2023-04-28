const infoController = {
  labelRender(req, res) {
    res.render('info/labelqualite');
  },
  permisEuroRender(req, res) {
    res.render('info/permis1euro');
  },
  reglementRender(req, res) {
    res.render('info/reglement');
  },
  contratRender(req, res) {
    res.render('info/contrat');
  },
  evalBRender(req, res) {
    res.render('info/evaluationB');
  },
  evalARender(req, res) {
    res.render('info/evaluationA');
  },
  examBRender(req, res) {
    res.render('info/examenB');
  },
  examARender(req, res) {
    res.render('info/examenA');
  },
  horaireTheorieRender(req, res) {
    res.render('info/horairestheorie');
  },
  theorieGRender(req, res) {
    res.render('info/theoriegenerale');
  },
  theorieSpeRender(req, res) {
    res.render('info/theoriespecifique2roues');
  },
  planBRender(req, res) {
    res.render('info/formationB');
  },
  planArender(req, res) {
    res.render('info/formationA');
  },
  piste2RouesRender(req, res) {
    res.render('info/formation2roues');
  },
  handicapRender(req, res) {
    res.render('info/handicap');
  },
};




module.exports = infoController;