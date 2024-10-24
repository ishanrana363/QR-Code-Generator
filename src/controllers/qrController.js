const qrModel = require("../models/qrModel");
const QRCode = require('qrcode');

exports.generateQRCode = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        // QR কোড তৈরি করতে await ব্যবহার করুন
        const qrImageUrl = await QRCode.toDataURL(`${name} ${email} ${phone}`);

        // MongoDB তে QR কোড এবং অন্যান্য ডেটা সংরক্ষণ করুন
        const qrCode = new qrModel({ name, email, phone, qrImageUrl });
        await qrCode.save();

        res.status(201).json({
            status: "success",
            data: qrImageUrl
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "fail",
            msg: "Internal server error"
        });
    }
};

exports.allQrCode = async (req,res)=>{
    try {
        const qrCodes = await qrModel.find({});
        res.status(200).json({
            status: "success",
            data: qrCodes
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "fail",
            msg: "Internal server error"
        });
    }
}
