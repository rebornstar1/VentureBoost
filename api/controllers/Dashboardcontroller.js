import express from "express";
import Testimonial from "../models/Testimonialmodel.js";
import InvestOffer from "../models/InvestOffer.js";

export const DashTestimonial = async(req,res,next) => {
    console.log(req.body);
    // Data yahapar successfully aa raha hai ab
    const {Title,Description,yname,oname} = req.body;
    const newTestimonial = await Testimonial.create({Title,Description,yname,oname});
    try
    {
       await newTestimonial.validate();
       return res.status(201).json("Testimonial Added Successfully")
    } 
    catch(error)
    {
       next(error);
    }
}

export const SeeFeedBack = async(req,res,next) => {
    try
    {
      const allfeedback = await Testimonial.find();
      res.status(201).json(allfeedback);
    }
     catch(error)
    {

    }
}

export const OfferInput = async(req,res,next) => {
  console.log(req.body);
  const {interest,Equity,investmentType,pcapital,rdate,royalty,valuation} = req.body;
  const newOffer = new InvestOffer({interest,Equity,investmentType,pcapital,rdate,royalty,valuation});
  try
  {
    await newOffer.validate();
    await newOffer.save();
    return res.status(201).json({successmessage : "Investment Offer Done Successfully"})
  } 
  catch(error)
  {
    // return error.message;
     if(error.name === 'ValidationError') {
         const errorMessages = Object.values(error.errors).map(err => err.message);
         return res.status(400).json({ errors: errorMessages });
     }
     next(error);
  }
}