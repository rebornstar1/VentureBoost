import mongoose from "mongoose";

const InvestOfferSchema = new mongoose.Schema({
    Equity : {
        type : Number,
        required : [true,"Equity is Required"],
        max : [49,"Equity Cannot Exceed Above 49%"]
    },
    interest : {
        type : Number,
        max : [24,"Interest Rate on Loan Must be Less than 24%"]
    },
    pcapital : {
        type : Number,
        min : [100000,"Principal Capital for Loan Must be greater than 100000"]
    },
    rdate : {
        type : Date
    },
    royalty : {
        type : Number,
        max : [3,"Royalty Cannot Exceed more than 3%"]
    },
    valuation : {
        type : Number,
        required : [true,"Without Valuation you cannot Invest"],
        min : [100000,"Valuation Must be 100000 or Onwards"]
    },
    investmentType : {
        required : [true,"Please Select the Investment Type"],
        type : String,
    }
},{timestamps : true});

const InvestOffer = mongoose.model('InvestOffer',InvestOfferSchema);
export default InvestOffer;