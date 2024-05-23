
const createHttpError = require("http-errors");
const blogService = require("./blog.service");


class MainPageController {
    #service;
    constructor () {
        this.#service = blogService;
    }

    async portofiloPage(req, res, next) {
        try {
            const {page,limit}=req.params;
            if(typeof page === Number || page instanceof Number ) return createHttpError.NotAcceptable(BlogMessage.TYPEOFFEILDDOSENOTEXCEPET);
            if(typeof limit === Number || limit instanceof Number ) return createHttpError.NotAcceptable(BlogMessage.TYPEOFFEILDDOSENOTEXCEPET);        } catch (error) {
            next(error);
        } 
    } 
    async createBlog(req, res, next) { 
        const {nameblog,descriptionblog,categoryblog,contentblog,authorblog,tagsblog}=req.body;
        
    }
     



}

module.exports = {
    MainPageController:new MainPageController()
}