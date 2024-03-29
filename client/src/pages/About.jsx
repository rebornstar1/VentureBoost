import React, { useState } from 'react';
import { useEffect } from 'react';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectLogo: '',
    email: '',
    valuation: '',
    last1stYear : '',
    last2ndYear : '',
    last3rdYear : '',
    majorEquityHolders: '',
    uniqueSellingPropositions: '',
    videoPitch: '',
    description: '',
    password: ''
  });

  const [file,setfile] = useState(null);

  const [stakeholders, setStakeholders] = useState([]);
  const [newStakeholder, setNewStakeholder] = useState('');

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    console.log("Successfull Test Submission of the Project")
  }

  const handleProjectChange = (e) => {
    e.preventDefault();
    try{
    setFormData({
      ...formData, [e.target.id] : e.target.value
    })
    console.log(formData);
    } 
    catch(error){
    console.log(error)
    }
  }

  const handleInputChange = (e) => {
    setNewStakeholder(e.target.value);
  };

  const handleAddStakeholder = () => {
    if (newStakeholder.trim() !== '') {
      setStakeholders([...stakeholders, newStakeholder]);
      setNewStakeholder('');
    }
  };

  const handleRemoveStakeholder = (index) => {
    const updatedStakeholders = stakeholders.filter((_, i) => i !== index);
    setStakeholders(updatedStakeholders);
  };

  useEffect(()=> {
    if(file)
    {
      handleFileUpload(file);
    }
  },[file]);


  const handleFileUpload = async (file) => {
    console.log(file);
    try {
      const formval = new FormData();
      formval.append('projectlogo', file);
      //console.log(formval);
        const res = await fetch('http://localhost:3000/api/uploads/image', {
            method: 'POST',
            body: formval, 
        });

        const data = await res.json();
        console.log(data);
        if(data.url){
          setFormData({
            ...formData, projectLogo : data.url,
          })
        }
    } catch (error) {
        console.log(error);
    }
}


  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto p-6 bg-gradient-to-r from-gray-900 to-gray-600 shadow-md font-montserrat">
      <h2 className="text-3xl font-semibold mb-4 text-center text-white">Project Information</h2>
      <p className='text-center text-orange-500'>Information Shared here will be publicly accessible</p>
      <form className='flex justify-center flex-col flex-wrap gap-2 md:gap-5 w-11/12 md:w-1/2 mx-auto p-2 md:p-10' onSubmit={handleProjectSubmit} encType='multipart/form-data'>
            <div className='flex flex-col gap-1'>
                <div className='text-white'>Project Name</div>
                <input className='rounded-md p-1' placeholder='Project Name' id='projectName' onChange={handleProjectChange}></input>
            </div>
            <div className="mb-4 col-span-3">
              <label className="block mb-1 text-white">Project Logo</label>
              <input type="file" accept="image/jpeg" name="projectlogo" onChange={(e) => setfile(e.target.files[0])} className="w-full p-1 border rounded-md text-white" />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='text-white'>Email Address</div>
                <input type="email" id="email" name="email" className='rounded-md p-1' onChange={handleProjectChange} placeholder='Email ID'></input>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='text-white'>Valuation <span className='opacity-40'>{`(Indian Rupees)`}</span></div>
                <input type="number" id="valuation" name="valuation" className='rounded-md p-1' onChange={handleProjectChange} placeholder='Minimum 100000 Valuation' min="100000"></input>
            </div>

            <div>
              <label className="block mb-1 text-white">Previous 3 Years Sales Stats <span className='opacity-40'>{`(Indian Rupees)`}</span></label>
                <div className="max-w-screen-lg mx-auto rounded-lg ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="mb-4">
                        <label className="block mb-1 text-white">{currentYear}</label>
                        <input type="number" id="last1stYear" name="last1stYear" className="w-full p-2 border rounded-md bg-white" onChange={handleProjectChange}/>
                      </div>
                      <div className="mb-4">
                        <label className="block mb-1 text-white">{currentYear-1}</label>
                        <input type="number" id="last2ndYear" name="last2ndYear" className="w-full p-2 border rounded-md bg-white" onChange={handleProjectChange}/>
                      </div>
                      <div className="mb-4">
                        <label className="block mb-1 text-white">{currentYear-2}</label>
                        <input type="number" id="last3rdYear" name="last3rdYear" className="w-full p-2 border rounded-md bg-white" onChange={handleProjectChange}/>
                      </div>
                </div>
            </div>

            <div className='text-white'>List Your Major Stakeholders</div>
                  <div className="w-full max-w-md">
                    <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Enter stakeholder"
                        value={newStakeholder}
                        onChange={handleInputChange}
                      />
                      <button
                        className="flex-shrink-0 bg-gray-700 hover:bg-gray-800 border-gray-700 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="button"
                        onClick={handleAddStakeholder}
                      >
                        Add
                      </button>
                    </div>
                    <div className="mt-4">
                      {stakeholders.map((stakeholder, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-200 px-4 py-2 my-2 rounded">
                          <span>{stakeholder}</span>
                          <button
                            className="text-red-500 hover:text-red-700"
                            type="button"
                            onClick={() => handleRemoveStakeholder(index)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
            </div>
        
            <div className='text-white m-1'>Unique Selling Proposition</div>    
            <textarea
              className="resize-none border rounded-md mt-2 focus:outline-none focus:ring focus:border-blue-300 w-full py-2 px-3 text-gray-700 leading-normal"
              rows={4} // Initial height of 4 rows
              placeholder="Enter your text here..."
            ></textarea>

            <div className='flex flex-col gap-1 mt-2 mb-2'>
                <div className='text-white'>Video Pitch Link</div>
                <input className='rounded-md p-1' placeholder='Please Upload Video on Youtube First and then Attach Link'></input>
            </div>

            <div className='text-white mt-4'>Describe Your Vision</div>    
            <textarea
              className="resize-none border rounded-md mt-2 focus:outline-none focus:ring focus:border-blue-300 w-full py-2 px-3 text-gray-700 leading-normal"
              rows={4} // Initial height of 4 rows
              placeholder="Enter your text here..."
            ></textarea>

            <div className='flex flex-row flex-wrap justify-left gap-2 md:gap-9'>
              <div>
                <div className='text-white mt-4 flex flex-col'>Password <span className='text-sm opacity-50'>(Must be Atleast 8 Characters)</span></div>    
                <input type="text" name="password" id="password" placeholder="Password" className="bg-white border p-2 rounded-lg mt-2"></input>
              </div> 
              <div>
                <div className='text-white mt-4 flex flex-col'>Confirm Password <span className='text-sm opacity-50'>(Must be Same as Password)</span></div>    
                <input type="text" name="password" id="password" placeholder="Password" className="bg-white border p-2 rounded-lg mt-2"></input>
              </div> 
            </div>

           <button type="submit" className="flex w-1/3 justify-center rounded-md mt-6 md:mt-8 bg-gradient-to-r from-indigo-600 to-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
