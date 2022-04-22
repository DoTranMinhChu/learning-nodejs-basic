const express = require('express');
const router = express.Router();

const ProductModel = require('../models/product.model');

router.get('/', async (req, res, next) => {
    let total;
    await ProductModel.countDocuments({})
        .then(data => total = data)
        .catch(err => total = 0)
    let { page } = req.query
    page = parseInt(page);
    page = page < 1 ? 1 : page;
    const per_page = 6;
    const total_page = Math.ceil(total / per_page);

    if (!page) {
        ProductModel.find({})
            .then(data => {
                res.json({
                    per_page: total,
                    total: total,
                    total_page: 1,
                    data: data
                })
            })
            .catch(err => {
                res.json(err)
            })
    } else {

        ProductModel.find().skip(per_page * (page - 1)).limit(per_page)
            .then(data => {
                res.json({
                    page: page,
                    per_page: per_page,
                    total: total,
                    total_page: total_page,
                    data: data
                })
            })
            .catch(err => {
                res.json(err)
            })
    }

})

router.get('/check', (req, res, next) => {
    console.log("check")
    res.render('./views/login/index')
})
module.exports = router