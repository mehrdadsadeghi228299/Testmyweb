
const {model, Types ,Schema} = require('mongoose');

const OTPSchema = new Schema({
    code: {type: String, required: false, default: undefined},
    expiresIn: {type: Number, required: false, default: 0},

});

const PersonSchema = new Schema({
    name:{type:String ,required:true},
    lastName:{type:String ,required:true},
    personlId:{type:String ,required:true}, 
    password:{type:String ,required:true},
    codeMeeli:{type:Number ,required:true,unique:true},
    mobile:{type:String ,required:true,unique:true},
    isActive:{type:[String] ,required:false},
    rule:{type:String ,enum:['admin','creator','normal','updater'], required:true,default:"admin"},
    howCreatedUser:{type:String , required:false},
    descriptionForupdate:{type:String, required:false},
    province:{type:Types.ObjectId , required:true,ref:"province"},
    subProvince:{type:Types.ObjectId , required:true,ref:"citymodel"},
    accessLevel:{type:String ,enum:['one','two','there'],required:true,default:'one'},
    email:{type:String , required:false},
    CityId:{type:String, required:false},
    otpMobile: {type: OTPSchema}
}
,{
    timestamps:true
});

const PersonModel = model("Person", PersonSchema);
module.exports = {
    PersonModel
}

