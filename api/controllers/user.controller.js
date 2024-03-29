
const Test = (req,res,next) => {
    try{
    return res.status(201).json("Congratulations Data Aagya");
    
    } catch(error){
        console.log(error)
    }
}

export default Test;

