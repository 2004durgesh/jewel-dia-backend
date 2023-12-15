const express = require('express');
const router = express.Router();
const excelController = require('../controllers/excelController');

// Endpoint for file upload and data insertion
router.post('/uploads', excelController.uploadExcel);
router.post('/jewellery', excelController.uploadJewelleryExcel);
router.post('/diamonds', excelController.uploadDiamondsExcel);

module.exports = router;
