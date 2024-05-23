const {model, Types ,Schema} = require('mongoose');
const pagination=require('mongoose-paginate-v2');

const blogPageSchema = new Schema({
    projectName:{type:String ,required:true},
    description:{type:String ,required:true},
    category:{type:String ,required:true},
    image:{type:String ,required:true},
    content:{type:String ,required:true},
    author:{type:String ,required:true},
    tags:{type:[Types.ObjectId] ,ref:'',required:true},
    comments:{type:String ,required:true},
    relatedProjects:{type:String ,required:true}
}
,{
    timestamps:true
    
});
blogPageSchema.plugin(pagination);
const BlogModel = model("BlogModel", blogPageSchema);
module.exports = {
    BlogModel
}

