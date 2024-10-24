const express = require('express');

const router = express.Router();

const qrController = require("../controllers/qrController");

router.post("/generate-qr-code", qrController.generateQRCode);



module.exports = router;