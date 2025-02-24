import React, { useState } from 'react';


const InvestmentForm = ({ onSubmit }) => {
  const [founderAsk, setFounderAsk] = useState('');
  const [valuation, setValuation] = useState('');
  const [equity, setEquity] = useState('');
  const [investmentType, setInvestmentType] = useState('equity');
  const [royalty,setroyalty] = useState(0);
  const [interest,setinterest] = useState(0);
  const [pcapital,setpcapital] = useState(0);
  const [rdate,setrdate] = useState('');
  const [investmentDetails, setinvestmentDetails] = useState({});
  const [showmsg,setshowmsg] = useState('');
  const [color,setcolor] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await fetch('http://localhost:3000/api/invest/offer',
        {
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(investmentDetails)
        })
        const data = await res.json();
        if(data.successmessage)
        {
          setshowmsg(data.successmessage);
          setcolor(1);
        }
        else
        {
          setshowmsg(data.errors[0])
          setcolor(0);
        }
        console.log(data);
    } 
    catch(error)
    {
        console.log("There was some error while sending the Data")
    }
  };

  const handleChange = (e) => {
      const {id,value} = e.target;
      setinvestmentDetails(
        {
          ...investmentDetails,[e.target.id] : e.target.value
        }
      )

      if (id === 'valuation') {
        setValuation(value);
      } else if (id === 'Equity') {
        setEquity(value);
      } else if (id === 'investmentType') {
        setInvestmentType(value);
      } else if(id === 'interest'){
        setinterest(value);
      } else if(id === 'royalty'){
        setroyalty(value);
      } else if(id == 'pcapital'){
        setpcapital(value);
      } else if(id == 'rdate'){
        setrdate(value);
      }
  }

  console.log(investmentDetails);


  return (
    <form className="bg-[#F0F0F0] p-8 rounded shadow-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Founder's Statement</h2>
      <div className='line-clamp-6'>
      Dear Investors,

We are seeking funding to support the next phase of our organization's growth and expansion. Your investment will help us scale our operations, reach new markets, and drive innovation. We look forward to partnering with you on this exciting journey.

Warm regards,
Sanjay Paul
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-10">Make an Investment Offer</h2>

      <div>
        <label className="block text-md font-medium leading-6 ">Valuation</label>
        <div className="mt-2">
        <input
          type="Number"
          id = "valuation"
          value = {valuation}
          onChange={handleChange}
          placeholder='Minimum 100000 INR OR 5000$'
          className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-md sm:leading-6 p-2"
        />
         </div>
      </div>

      <label className="block my-4">
        Equity:
        <input
          id = "Equity"
          type="Number"
          value={equity}
          onChange={handleChange}
          placeholder='Must be less than 50.1%'
          className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-md sm:leading-6 p-2"
        />
      </label>
      <label className="block my-4">
        Additional Details
        <select
          id = "investmentType"
          value={investmentType}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-md sm:leading-6 p-2"
        >
          <option value="equity">Equity</option>
          <option value="loan">Loan</option>
          <option value="royalty">Royalty</option>
        </select>
      </label>
      {investmentType === 'loan' && (
        <div>
        <label className="block mb-4">
          Principal Capital : 
          <input
            type="Number"
            id = "pcapital"
            value={pcapital}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-md sm:leading-6 p-2"
          />
        </label>
        <label className="block mb-4">
          Interest Rate :
          <input
            type="Number"
            id = "interest"
            value={interest}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-md sm:leading-6 p-2"
          />
        </label>
        </div>
      )}
      {investmentType === 'royalty' && (
        <div>
            <label className="block mb-4">
              Royalty Percentage :
              <input
                id="royalty"
                type="Number"
                value={royalty}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-md sm:leading-6 p-2"
              />
            </label>
            <label className="block mb-4">
            Time Period : 
            <input
              type="Date"
              id = "rdate"
              value={rdate}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-md sm:leading-6 p-2"
            />
          </label>
      </div>
      )}
      <div className={`${color === 0 ? "text-red-500" : "text-green-500"} text-center my-2`}>{showmsg}</div>
      <button type="button" onClick={handleSubmit} className="flex w-full mx-auto justify-center rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
    </form>
  );
};

export default InvestmentForm;
