import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"//jwt->bearer token i.e type of key for locks
import bcrypt from "bcrypt"



const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,//for enabling searching field
    },
    email:{
        
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true, 
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true,//for enabling searching field
    },
    avatar:{
        type:String,//cloudinary url
        required:true
    },
    coverimage:{
        type:String,//cloudinary url
    },
    watchhistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }],
    password:{
        type:String,//encrypted form bcrypt->hashed the password
        required:[true ,'Password is required']
    },
    refreshtoken:{
        type:String,
    },
  

},
{
    timestamps:true
})


//prehooks middleware in mongoose-> database me data store hone se just phle ye kaam kar do; i.e for password encryption
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password,10)
  next()
})

//custom method
userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password,this.password)//either true or false
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign({
        _id: this._id,
        email:this.email,
        username: this.username,
        fullname:this.fullname
    },
    process.env.JWT_SECRET,
    {
        expiresIn:process.env.TOKEN_EXPIRY
    }
    )
}
userSchema.methods.generateRefreshToken = function(){
    jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    },
    )
}

export const User = mongoose.model("User",userSchema)