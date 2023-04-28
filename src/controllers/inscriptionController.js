
const inscriptionController = {
    bTradRender(req, res) {
        res.render('inscription/btrad');
    },
    bAccpRender(req, res) {
        res.render('inscription/baccp');
    },
    bSupvRender(req, res) {
        res.render('inscription/bSupv');
    },
    a1Render(req, res) {
        res.render('inscription/a1')
    },
    a2Render(req, res) {
        res.render('inscription/a2')
    },
    amRender(req, res) {
        res.render('inscription/am')
    },
    a2aRender(req, res) {
        res.render('inscription/a2a')
    },
    b78bRender(req, res) {
        res.render('inscription/b78b')
    }
};





module.exports = inscriptionController;