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
        minlength: Number(8),
    },
    avatar: {
        type: String,
        default: "https://media.licdn.com/dms/image/D4D03AQFuZvu4mTnTYg/profile-displayphoto-shrink_800_800/0/1700451059256?e=2147483647&v=beta&t=IqH8rLtKhk5Oz0DU-2CasSzGXY90SMZokZ_4jK9a8Hw"
    },
},{timestamps : true});

const User = mongoose.model('User',userSchema);

export default User;