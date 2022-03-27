const connect = require('../config/connectDB')
const path = require('path');
const upload = require('../config/uploadMiddleware');
const Resize = require('../config//Resize');

const Product = function (product) {
    this.title = product.title;
    this.price = product.price;
    this.img = product.img;
}
Product.get_all = async (rs) => {
    const [rows, result] = await connect.query('SELECT * from product');
    rs(rows)
}


Product.add = async (req, rs) => {
    const data = req.body
    const imagePath = path.join(__dirname, '../../public/images');
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
        rs(false)
    }
    const filename = await fileUpload.save(req.file.buffer);

    await connect.query('INSERT INTO product (title, price, img) VALUES (?, ?, ?)', [data.title, Number(data.price), filename]);
    rs(true)
}


Product.delete = async (id) => {
    await connect.query('DELETE FROM product WHERE id = ?', [id]);

}
module.exports = Product