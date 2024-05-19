
const createHttpError = require("http-errors");
const MainPageService = require("./main.service");


class MainPageController {
    #service;
    constructor () {
        this.#service = MainPageService;
    }

    async indexMainPage(req, res, next) {
        try {
             res.render('html/index',{
                title:"Lawer"
             }); 
        } catch (error) {
            next(error);
        } 
    }  
     async aboutPage(req, res, next) {
        try {
             res.render('html/about',{
                title:"About"
             });
        } catch (error) {
            next(error);
        }
    }
    async ourServiceMainPage(req, res, next) {
        try {
             res.render('html/what-we',{
                title:"Service"
             });
        } catch (error) {
            next(error);
        }
    }

    async blogMainPage(req, res, next) {
        try {
             res.render('html/blog',{
                title:"Blog"
             });
        } catch (error) {
            next(error);
        }
    }

    async contactMainPage(req, res, next) {
        try {
             res.render('html/contact',{
                title:"Contact | Darya"
             });
        } catch (error) {
            next(error);
        }
    }



}

module.exports = {
    MainPageController:new MainPageController()
}