const createHttpError = require("http-errors");
const { BlogModel } = require("./blog.model");
const { BlogMessage } = require("./blog.message");


class BlognPageService {
    #model;
    constructor () {
        this.#model = BlogModel;
    }

    async getAllBlog() {
        const result = await this.#model.find().countDocuments();
        return result
    }
    async pagination(page ,limit) {
     
        let page = 0, limit = 5
       /*   if (!page || page <= 1) page = 0;
        else page = page - 1;
        if (!limit || limit <= 0) limit = 5;
        const skip = page * limit;
        console.log(page, limit, skip);
        this.#model.find({}).sort('createdat').skip(skip).limit(limit).exec();
        return await this.#model.where({
            .createQueryBuilder("user")
            .orderBy("user.id", "ASC")
            .take(limit)
            .skip(skip)
            .getMany();
        })
        */
     
        const options = {
            page: page,
            limit: limit,
          };
          
         return result =await Model.paginate({}, options);
         
    }
    async getWithNameBlog(word) {
        const result = await this.#model.find({projectName:{$regex:"*./word/.*"}});
        return result
    }  
    async getWithDecriptionBlog(word) {
        const result = await this.#model.find({description:{$regex:"*./word/.*"}});
        return result
    }
    async createBlog(dto) {
        const result = await this.#model.create(dto);
        return result
    }

}
module.exports = new BlognPageService();