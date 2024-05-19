const express = require('express');
const dotenv  =require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const ejs=require('ejs');
const expressEjsLayouts = require('express-ejs-layouts');
const {AllRoutes}=require('./src/routes')
const moment = require('jalali-moment');
const CORS =require('cors');
const path =require('path')
const { NotFoundHandler } = require('./config/exception/not-found.handler');
const { AllExceptionHandler } = require('./config/exception/all-exception.handler');
const SwaggerConfig = require('./config/swagger/swagger.config');
dotenv.config();


const port=process.env.PORT; 
const ip=process.env.IP; 

const cookiesecretekey=process.env.cookiesecretekey;
async function main(){
    const app = express();
   // require('./config/db/db.config');
    SwaggerConfig(app);
    app.use(express.json());
    app.use(cookieParser(cookiesecretekey));
    app.use(CORS());
    app.set("view engine", "ejs");
    app.set('views', 'views');
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/images', express.static(path.join(__dirname, 'images')));
    app.use(AllRoutes);
    app.use(morgan("dev"));
    NotFoundHandler(app);
    AllExceptionHandler(app);
    app.listen(port,ip,()=>{
        console.log(`server is running on: ${ip}:${port}`);
    });
}

main();