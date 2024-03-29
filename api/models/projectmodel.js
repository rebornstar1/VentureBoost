import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    ProjectName: {
        type: String,
        required:true,
        unique:true,
    },
    ProjectLogo: {
        type: String,
        default: "https://media.licdn.com/dms/image/D4D03AQFuZvu4mTnTYg/profile-displayphoto-shrink_800_800/0/1700451059256?e=2147483647&v=beta&t=IqH8rLtKhk5Oz0DU-2CasSzGXY90SMZokZ_4jK9a8Hw"
    },
    OfficialMail: {
        type: String,
        required:true,
        unique:true,
    },
    Valuation: {
       type: Number,
       required:true,
    },
    last1stYear: {
        type: Number,
    },
    last2ndYear: {
        type: Number,
    },
    last3rdYear: {
        type: Number,
    },
    MajorEquityHolders: {
        type: Object,
        required:true,
    },
    UniqueSellingProposition: {
        type: String,
        required:true,
    },
    VideoPitch: {
        type: String,
        required: true,
    },
    DescribeinWords: {
        type : String,
        maxlength : Number(500),
    },
    Password: {
        type: String,
        required:true,
        unique:true,
        minlength: Number(8),
    },
},{timestamps : true});

const Project = mongoose.model('Project',projectSchema);

export default Project;