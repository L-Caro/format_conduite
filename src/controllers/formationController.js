const formationController = {
    bTradRender(req, res) {
        res.render('formation/btrad');
    },
    bAccpRender(req, res) {
        res.render('formation/baccp');
    },
    bSupvRender(req, res) {
        res.render('formation/bSupv');
    },
    a1Render(req, res) {
        res.render('formation/a1')
    },
    a2Render(req, res) {
        res.render('formation/a2')
    },
    amRender(req, res) {
        res.render('formation/am')
    },
    a2aRender(req, res) {
        res.render('formation/a2a')
    },
    b78bRender(req, res) {
        res.render('formation/b78b')
    },
    perfectRender(req, res) {
        res.render('formation/perfect')
    },

};




module.exports = formationController;