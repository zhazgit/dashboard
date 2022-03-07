const {Router} = require('express');
const { defaults } = require('request');
const router = Router();
const {isAuthenticated} = require('../helpers/auth');


const {
    renderDados, renderContratos, renderOS, renderAA, renderAC, renderAPS, renderAV,
    renderEE, renderEM, renderF, renderMC, renderOA,renderOR, renderV
} = require('../controllers/dados.controller')

router.get('/dados', isAuthenticated, renderDados);

router.get('/contratos', isAuthenticated, renderContratos);

router.get('/os', isAuthenticated, renderOS);

router.get('/aguardando_aprovacao', isAuthenticated, renderAA );

router.get('/aguardando_chegada', isAuthenticated, renderAC);

router.get('/aguardando_pecas', isAuthenticated, renderAPS);

router.get('/aguardando_vistoria', isAuthenticated, renderAV);

router.get('/em_expedicao', isAuthenticated, renderEE);

router.get('/em_manutencao', isAuthenticated, renderEM);

router.get('/finalizadas', isAuthenticated, renderF);

router.get('/manutencao_concluida', isAuthenticated, renderMC);

router.get('/ordens_aprovadas', isAuthenticated, renderOA);

router.get('/ordens_reprovadas', isAuthenticated, renderOR);

router.get('/vistoriados', isAuthenticated, renderV);

module.exports = router;