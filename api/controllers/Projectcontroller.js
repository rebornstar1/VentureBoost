import Project from "../models/projectmodel.js";

export const CreateProject = async(req,res,next) => {
    try{
      console.log(req.body);
      const {ProjectName,ProjectLogo,OfficialMail,Valuation,
             last1stYear,last2ndYear,last3rdYear,
             MajorEquityHolders,UniqueSellingProposition,
             VideoPitch,DescribeinWords,Password} = req.body;

      const newProject = await Project.create
      ({ProjectName,ProjectLogo,OfficialMail,Valuation,
        last1stYear,last2ndYear,last3rdYear,
        MajorEquityHolders,UniqueSellingProposition,
        VideoPitch,DescribeinWords,Password});
      console.log(newProject);
      await newProject.validate();
      return res.status(201).json("Project Created Successfully!");
    }
    catch(error){
        console.log(error);
    }
}

export const GetProject =  async(req,res,next) => {
  try{
     const allproject = await Project.find();
    // console.log(allproject);
     res.status(201).json(allproject)
  } catch(error){
    console.log(error);
  }
}