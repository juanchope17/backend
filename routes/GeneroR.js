
const express = require('express');
const router = express.Router();
const generoC = require('../controllers/GeneroC');

router.get('/', generoC.getAllGeneros);
router.get('/:id', generoC.getGeneroById);
router.post('/', generoC.addGenero);
router.put('/:id', generoC.updateGenero);
router.delete('/:id', generoC.deleteGenero);


module.exports = router;