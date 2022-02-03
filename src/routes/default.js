const {Router} = require('express');
const { defaults } = require('request');
const router = Router();

const {
    renderDados, renderContratos, renderOS, renderAA, renderAC, renderAPS, renderAV,
    renderEE, renderEM, renderF, renderMC, renderOA,renderOR, renderV
} = require('../controllers/dados.controller')

router.get('/dados', renderDados);

router.get('/contratos', renderContratos);

router.get('/os', renderOS);

router.get('/aguardando_aprovacao', renderAA );

router.get('/aguardando_chegada', renderAC);

router.get('/aguardando_pecas', renderAPS);

router.get('/aguardando_vistoria', renderAV);

router.get('/em_expedicao', renderEE);

router.get('/em_manutencao', renderEM);

router.get('/finalizadas', renderF);

router.get('/manutencao_concluida', renderMC);

router.get('/ordens_aprovadas', renderOA);

router.get('/ordens_reprovadas', renderOR);

router.get('/vistoriados', renderV);

module.exports = router;