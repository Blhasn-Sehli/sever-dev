const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
// require('./database/index')
const userRouter = require('./routers/user.router')
const categoriesRouter = require('./routers/categories.router')
const messagesRouter = require('./routers/message.router')
const productRouter = require('./routers/product.router')

const postRouter = require('./routers/post.router')
const wishlistRouter = require('./routers/wishList.router')
const port = process.env.PORT; // Change this to your desired port number

app.use(cors())
app.use(express.json());

app.use("/api/users", userRouter);

app.use('/api/messages',messagesRouter);
app.use("/api/products", productRouter);
app.use("/api/categories",categoriesRouter); 
app.use("/api/posts", postRouter)
app.use("/api/wishlists", wishlistRouter);

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
