const categorias= require ('../data/categories_db')

module.exports= {
    add: (req,res) => {
        return res.render('productAdd',{
            title: "Crafty2.0",
            categorias,
        })
    },
}