const Product = require("../models/product");
const path = require('path');

exports.get_all = (req, res) => {
    Product.get_all(function (data) {
        console.log(data);
        data.map(tmp => {
            tmp.img = path.resolve('./public/images/' + tmp.img)

        })
        res.status(200).json(data)
    })
}
exports.add = (req, res) => {
    console.log(req.body);
    Product.add(req, (rs) => {
        if (rs) {
            res.statusMessage = "Thanh cong";
            res.status(200).end();
        } {
            res.statusMessage = "KJo Thanh Cong";
            res.status(500).end();

        }

    })

}
exports.getimg = (req, res) => {
    console.log(req);
    res.sendFile(path.resolve('./public/images/' + req.params.url));


}