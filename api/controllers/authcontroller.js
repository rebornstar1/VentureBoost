import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import maerr from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const Signup = async (req,res,next) => {

    const {username,email,password} = req.body;
    const hashedpassword = bcryptjs.hashSync(password,10);
    const newUser = new User ({username,email,password : hashedpassword});
    try {
    await newUser.save();
    return res.status(201).json("User Created Successfully!");
    } catch(error){
        next(error)
    }
}


export const Signin = async (req,res,next) => {

    const {email,password} = req.body;
    try {
      const validUser = await User.findOne({email});
      if(!validUser) return next(maerr(404,'User Not Found'));
      const validPassword = bcryptjs.compareSync(password,validUser.password)
      if(!validPassword) return next(maerr(401,'Wrong Credentials'))
      const token = jwt.sign({id:validUser._id }, process.env.JWT_SECRET)
      const {password: pass,...rest} = validUser._doc
      res.cookie('access_token',token,{httpOnly: true})
      .status(200)
      .json(rest)
    }
    catch(error)
    {
    next(error)
    }
}