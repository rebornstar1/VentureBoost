import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import maerr from './../utils/error.js'

const Auth = async (req,res,next) => {
    const {username,email,password} = req.body;
    const hashedpassword = bcryptjs.hashSync(password,10);
    const newUser = new User ({username,email,password : hashedpassword});
    try {
    await newUser.save()
    res.status(201).json("User Created Successfully!");
    } catch(error){
        next(error)
    }
}

export default Auth;