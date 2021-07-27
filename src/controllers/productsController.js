const categorias= require ('../data/categories_db')
const productos= require('../data/products_db')

module.exports= {
    add: (req,res) => {
        return res.render('productAdd',{
            title: "Crafty2.0",
            categorias,
        })
    },
    detail: (req,res) => {
        let producto= productos.find(producto => producto.id === +req.params.id)
        return res.render('productDetail',{
            producto
        })
    },
}