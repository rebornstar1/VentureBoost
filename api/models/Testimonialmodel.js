import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
    Title: {
        type: String,
        required:true,
    },
    Description: {
        type: String,
        required:true,
    },
    yname: {
        type: String,
        required:true,
    },
    oname: {
        type: String,
        required:true,
    },
},{timestamps : true});

const Testimonial = mongoose.model('Testimonial',TestimonialSchema);

export default Testimonial;