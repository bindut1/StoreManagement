const categoryMiddleware = require("../../middlewares/client/category.middleware.js")
const cartMiddleware = require("../../middlewares/client/cart.middleware.js")
const userMiddleware = require("../../middlewares/client/user.middleware.js")

const homeRouters = require("./home.route.js")
const productRouter = require("./product.route.js")
const searchRouter = require("./search.route.js")
const cartRouter = require("./cart.route.js")
const checkoutRouter = require("./checkout.route.js")
const userRouter = require("./user.route.js")

module.exports = (app) => {
    app.use(categoryMiddleware.category)  
    app.use(cartMiddleware.cardId)        
    app.use(userMiddleware.infoUser)        

    app.use("/", homeRouters);
    app.use("/products", productRouter)
    app.use("/products", productRouter)
    app.use("/search", searchRouter)
    app.use("/cart", cartRouter)
    app.use("/checkout", checkoutRouter)
    app.use("/user", userRouter)
}