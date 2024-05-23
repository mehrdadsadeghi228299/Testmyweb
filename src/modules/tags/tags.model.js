const {model, Types ,Schema} = require('mongoose');

const tagsSchema = new Schema({
    name:{type:String ,required:true,unique:true},
    description:{type:String ,required:false},
    blogId:{type:[Types.ObjectId],ref:'BlogModel'},

}
,{
    timestamps:true
});

const TagasModel = model("TagsModel", tagsSchema);
module.exports = {
    TagasModel
}

