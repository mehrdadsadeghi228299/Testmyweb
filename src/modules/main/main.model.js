const {model, Types ,Schema} = require('mongoose');


const MainPageSchema = new Schema({
    name:{type:String ,required:true},
    lastName:{type:String ,required:true},

}
,{
    timestamps:true
});

const MainPageModel = model("MainPage", MainPageSchema);
module.exports = {
    MainPageModel
}

