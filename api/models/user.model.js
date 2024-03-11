import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        unique:true,
    },
    email: {
        type: String,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required:true,
        unique:true,
        minlength: 8,
    },
    avatar: {
        type: String,
        default: "data:image/png;base64,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"
    },
},{timestamps : true});

const User = mongoose.model('User',userSchema);

export default User;