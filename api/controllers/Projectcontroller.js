import Project from "../models/projectmodel.js";

export const CreateProject = async(req,res,next) => {
    try{
      const newProject  = await Project.create(req.body);
      return res.status(201).json(newProject);
    }
    catch(error){
        console.log(error);
    }
}