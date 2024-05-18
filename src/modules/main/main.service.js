const createHttpError = require("http-errors");
const { MainPageModel } = require("./main.model");


class MainPageService {
    #model;
    constructor () {
        this.#model = MainPageModel;
    }

    async UPMainPage() {
        return ""

    }
}
module.exports = new MainPageService();