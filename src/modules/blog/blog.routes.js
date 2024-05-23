const { MainPageController } = require('./main.controller');

const router=require('express').Router();


router.get('/',MainPageController.indexMainPage);
router.get('/blog',MainPageController.blogMainPage);
router.get('/contact',MainPageController.contactMainPage);
router.get('/service',MainPageController.ourServiceMainPage);
router.get('/about',MainPageController.aboutPage);

module.exports={
    MainPageRoute:router
}