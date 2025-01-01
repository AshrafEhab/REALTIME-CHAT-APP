const mongoose = require('mongoose');

const userSchema = new mongoose.Schema
(
    {
        firstName: 
        {
            type:String, 
            required:true,
            max:30,
        },
        lastName: 
        {
            type:String, 
            max:30,
        },

        email: 
        {
            type:String, 
            required:true,
            unique: true, 
            max:40,
        },

        password: 
        {
            type:String, 
            required:true, 
            min:8,
            max:20,
        },

        profileImageUrl: 
        {
            type:String, 
            default:"",
        },
    },
    {
        timestamps: true,
    }
)

const User = mongoose.model("User",userSchema);

module.exports = User;
