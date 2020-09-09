const router = require('express').Router();

const controller = require('../controllers/wallet.controller');

router.get('/', controller.index);
router.post('/add', controller.addWallet);
router.patch('/update/wallet-name', controller.updateWalletName);

module.exports = router;
