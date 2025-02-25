const categoryMiddleware = require("../../middlewares/client/category.middleware.js")
const cartMiddleware = require("../../middlewares/client/cart.middleware.js")

const homeRouters = require("./home.route.js")
const productRouter = require("./product.route.js")
const searchRouter = require("./search.route.js")
const carthRouter = require("./cart.route.js")

module.exports = (app) => {
    app.use(categoryMiddleware.category)  
    app.use(cartMiddleware.cardId)        

    app.use("/", homeRouters);
    app.use("/products", productRouter)
    app.use("/products", productRouter)
    app.use("/search", searchRouter)
    app.use("/cart", carthRouter)
}