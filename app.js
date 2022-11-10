require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./api/users/user_router');
app.use(router);


app.listen(process.env.APP_PORT, () => {
    console.log("Application is running on port 3000");
});

