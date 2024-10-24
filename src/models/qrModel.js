const mongoose = require('mongoose');

const QRCodeSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    qrImageUrl: {
        type: String,
        required: true
    },
});

const qrModel = mongoose.model('QRCode', QRCodeSchema);


module.exports = qrModel;