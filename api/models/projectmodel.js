import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    ProjectName: {
        type: String,
        required:true,
        unique:true,
    },
    ProjectLogo: {
        type: String,
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
        maxlength : 500,
    },
    Password: {
        type: String,
        required:true,
        unique:true,
        minlength: 8,
    },
},{timestamps : true});

const Project = mongoose.model('Project',ProjectSchema);
export default Project;