import React, { useEffect } from 'react'
import Testimonials from './Testimonials'
import { useState } from 'react';

function Ifeedback() {

  const [formData,setformData] = useState({});
  const [inputTestimonial,setinputTestimonial] = useState(0);
  const [feedback, setfeedback] = useState([]);

  const handleAdd = (e) => {
    setinputTestimonial(1^inputTestimonial);
  }

  useEffect(() => {
    GetTestimonials();
  },[]);

  const GetTestimonials = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/dashboard/seefeedback', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await res.json();
      console.log(data);
      setfeedback(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleTestAdd = async(e) => {
     e.preventDefault();
     try {
      const res = await fetch('http://localhost:3000/api/dashboard/testimonial',
        {
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(formData)
        })
        const data = await res.json();
        console.log(data);
        setinputTestimonial(1^inputTestimonial);
     }
     catch(error)
     {
       console.log(error)
     }
  }

  const handleChange = (e)=>{
    setformData(
      {
        ...formData,[e.target.id] : e.target.value
      }
    )
    console.log(formData);
  }

  console.log(inputTestimonial);

  const handleSubmit = (e) => {
    console.log("This form is just submitted")
  }

  return (
    <div className='flex flex-col lg:w-7/12 w-9/12 gap-4 mx-auto'>
        <div className='bg-[#F0F0F0] rounded-lg shadow-md'>
             <div className='text-3xl font-semibold px-7 py-4'>Testimonials</div>
             {inputTestimonial === 0 ?
              <button onClick={handleAdd} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mx-6 my-4 rounded">
              Add Your Testimonial
              </button> 
              :
              <form className="space-y-2 font-montserrat mx-2 md:mx-10" >
                    <div>
                      <label className="block text-sm font-medium leading-6 ">Title</label>
                      <div className="mt-2">
                        <input id="Title" name="Title" onChange={handleChange} type="text" required placeholder="Title" className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-md sm:leading-6 p-2"/>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium leading-6 ">Description</label>
                      </div>
                      <div className="mt-2">
                        <textarea rows={6} id="Description" name="Description" onChange={handleChange} type="textarea" required placeholder="Description" className=" block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:gray-indigo-600 sm:text-sm sm:leading-6 p-2"></textarea>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium leading-6 ">Your Name</label>
                      </div>
                      <div className="mt-2">
                        <input id="yname" name="yname" onChange={handleChange} type="text" required placeholder="Your Name" className=" block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:gray-indigo-600 sm:text-sm sm:leading-6 p-2"></input>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium leading-6 ">Organization Name</label>
                      </div>
                      <div className="mt-2">
                        <input id="oname" name="oname" onChange={handleChange} type="text" required placeholder="Organization Name" className=" block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:gray-indigo-600 sm:text-sm sm:leading-6 p-2"></input>
                      </div>
                    </div>

                    <div className='py-3 md:py-6 w-max'>
                      <button type="submit" onClick={handleTestAdd} className="flex w-full mx-5 justify-center rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>
              </form>
              }
                <div>
                {
                  feedback.map(fb => (
                    <Testimonials Title={fb.Title} Description={fb.Description} yname={fb.yname} oname={fb.oname}></Testimonials>
                  ))
                }
                </div>
             <div>
             </div>
        </div>
    </div>
  )
}

export default Ifeedback

// Now Write a POST Request to insert all of this data into the database about every testmonial
