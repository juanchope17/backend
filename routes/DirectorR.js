const express = require('express');
const router = express.Router();
const directorController = require('../controllers/DirectorC');

router.get('/', directorController.getAllDirectors);
router.get('/:id', directorController.getDirectorById);
router.post('/', directorController.addDirector);
router.put('/:id', directorController.updateDirector);
router.delete('/:id', directorController.deleteDirector);

module.exports = router;

