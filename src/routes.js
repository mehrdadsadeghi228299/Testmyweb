const { MainPageRoute } = require('./modules/main/main.routes');

const route = require('express').Router();

route.use(MainPageRoute)


module.exports={
    AllRoutes:route
}