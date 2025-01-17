const { appError } = require("../utils/appError.js");
const  User  = require('../models/User');
const { passwordHasher, passwordValidator } = require("../utils/passwordUtils.js");
const generateToken = require("../utils/generateToken.js");
const { uploadToCloudinary } = require("../utils/uploadToCloudinary.js");


const getAllUsers = async (req, res, next) =>
{
    try 
    {
        const users = await User.find().select("-password").exec();
        let contacts = [];
        let profile ={};

        const userId = req.userId;
        users.forEach((user)=> 
        {
            (user._id.toString() === userId) ? profile = user : contacts.push(user); 
        });

        res.json(
        {
            users:
            {
                profile,
                contacts,
            }
        });        
    } 
    catch (error)
    {            
        next(appError("Error",500)); 
    }
}
    
const getUser = async (req, res, next) =>
{
    try 
    {   
        const id = req.params.id;    
        const user = await User.findById(id).exec(); 
        if (user)
        {
            res.json(
                {
                    status:"Done Successfully",
                    data:user
                });    
        }
        else
        {
            next(appError("Invalid id",400)); 
        }
    } 
    catch (error)
    {
        next(appError("Invalid id",400)); 
    }
}       

const registerUser = async (req, res, next) =>
{
    try 
    {   
        const hashedPassword =  await passwordHasher(req.body.password);
        
        const user = new User(
        {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:hashedPassword,
        });
        await user.save();
        
        res.status(200).end();
    } 
    catch (error)
    {
        /*  
            E11000 duplicate key error collection: 
            blog-api-db.users index: field_1 
            dup key: { field: "example" }
        */

        let err = error.message.split(" ");
        if(err[0]=="E11000")
        {
            next(appError("Email is already used!",400)); 
        }
        else
        {
            next(appError(error.message,400)); 
        }
        
    }
}

const editUser = async (req, res, next) =>
{
    try 
    {   
        const id = req.params.id;
        let user = await User.findById(id).exec();

        if(req.userId !== id)
        {
            next(appError("Access Denied!",403));
        }

        user = await User.findOneAndUpdate(
        {
            _id:id
        },

        {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
        },

        {
            new:true
        });

        res.json(
        {
            status:"Edited Successfully",
            data:user
        }
        )
    } 
    catch (error)
    {
        next(appError(error.message,400)); 
    }
} 

const deleteUser = async (req, res, next) =>
{
    try 
    {   
        const id = req.params.id;                
        const user = await User.findById(id).exec();
        
        
        if(req.userId === id)
        {
            await User.deleteOne({_id:id}).exec();  
            res.json(
                {
                    status:"Deleted Successfully",
                }
            )
        }
        else
        {
            next(appError("Access Denied!",403));
        }
        
    } 
    catch (error)
    {
        next(appError("Invalid id",400)); 
    }
}   
   
const loginUser =  async (req, res, next) =>
{
    try 
    {   
        const {email, password} = req.body;        
        const user = await User.findOne({email}).exec();

        if (user.length < 1)
        {
            next(appError("Wrong email or password",400)); 
        }
        else
        {
            const isValid = passwordValidator(password, user.password);
            if(!isValid)
            {
                next(appError("Wrong email or password",400)); 
            }
            else
            {
                const token = await generateToken(user._id);
                res.json(
                {
                    status:"Logged In Successfully",
                    token,
                })
            }
        }
    } 
    catch (error)
    {
        next(appError("Wrong Email or Password",400)); 
    }
} 

const uploadImage =  async (req, res, next) =>
    {
        try 
        {   
            if(req.file===undefined)
            {
                next(appError("Undefined!!",400))
            }
            const imageUrl = await uploadToCloudinary(req.file.buffer, req.userId);
    
            if(imageUrl)
            {
                const user = await User.findById(req.userId).exec();
                user.profileImageUrl = imageUrl;
                await user.save();
                res.json(
                {
                    status:"Image Set Successfully!",
                    imageUrl,
                });
            }
            else
            {
                next(appError("Error in uploading Image!",400));
            }
        } 
        catch (error)
        {
            next(appError("Error in Uploading File!",400)); 
        }
} 
const setImageUrl =  async (req, res, next) =>
{
    try 
    {   
        if(req.body.imageUrl)
        {
            await User.findByIdAndUpdate(req.userId, {profileImageUrl: req.body.imageUrl},{ new: true, runValidators: true });
        
            res.json(
            {
                status:"Image Set Successfully!",
            });
        }
    }
    catch (error)
    {
        next(appError("Error in Setting Photo!",400)); 
    }
} 

module.exports = 
{
    getAllUsers,
    getUser,
    registerUser,
    loginUser,
    uploadImage,
    setImageUrl,
    deleteUser,
    editUser,
};
