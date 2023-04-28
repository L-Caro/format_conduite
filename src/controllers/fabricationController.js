const fabricationController = {
    bTradRender(req, res) {
        res.render('fabrication/btrad');
    },
    bAccpRender(req, res) {
        res.render('fabrication/baccp');
    },
    bSupvRender(req, res) {
        res.render('fabrication/bSupv');
    },
    a1Render(req, res) {
        res.render('fabrication/a1')
    },
    a2Render(req, res) {
        res.render('fabrication/a2')
    },
};




module.exports = fabricationController;