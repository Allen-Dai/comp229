const express = require('express');
const router = express.Router();
const contactController = require('../controller/bizContact')

router.get('/', contactController.loadContacts);
  
router.get('/:id', contactController.deleteContacts)

router.post('/', contactController.addContact);

router.post('/:id', contactController.updateContacts)

module.exports = router;