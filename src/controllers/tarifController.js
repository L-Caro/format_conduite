const tarifController = {
  bTradRender(req, res) {
      res.render('tarif/btrad');
  },
  bAccpRender(req, res) {
      res.render('tarif/baccp');
  },
  bSupvRender(req, res) {
      res.render('tarif/bSupv');
  },
  a1Render(req, res) {
      res.render('tarif/a1')
  },
  a2Render(req, res) {
      res.render('tarif/a2')
  },
  amRender(req, res) {
      res.render('tarif/am')
  },
  a2aRender(req, res) {
      res.render('tarif/a2a')
  },
  b78bRender(req, res) {
      res.render('tarif/b78b')
  },
  perfectRender(req, res) {
      res.render('tarif/perfect')
  },
};




module.exports = tarifController;