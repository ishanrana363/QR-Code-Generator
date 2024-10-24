const mongoose = require('mongoose');

const QRCodeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
    qrImageUrl: {
        type: String,
        required: true
    }, createdAt: {
        type: Date,
        default: Date.now
    }
});

const qrModel = mongoose.model('QRCode', QRCodeSchema);


module.exports = qrModel;