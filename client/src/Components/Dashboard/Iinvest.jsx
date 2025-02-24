import React from 'react'
import InvestRecord from './InvestRecord';

function Iinvest() {
  return (
    <div className='flex flex-col lg:w-7/12 w-9/12 gap-4 mx-auto'>
        <div className=' bg-[#FFFFFF] rounded-lg shadow-md'>
             <div className='text-3xl m-3'>Funding Rounds</div>
             <div className='bg-[#F0F0F0] shadow-md'>
                <div className='grid grid-cols-2 md:grid-cols-4 justify-between mx-10 my-8 text-center py-3'>
                    <div>Investing Entity</div>
                    <div>Valuation</div>
                    <div className='hidden md:inline'>Equity</div>
                    <div className='hidden md:inline'>Relative Change</div>
                </div>
             </div>
             <InvestRecord Investor={"Adani Tech"} Valuation={"100B"} Equity={"10%"} Relative={3}></InvestRecord>
             <hr></hr>
             <InvestRecord Investor={"Adani Tech"} Valuation={"100B"} Equity={"10%"} Relative={-7}></InvestRecord>
             <hr></hr>
             <InvestRecord Investor={"Adani Tech"} Valuation={"100B"} Equity={"10%"} Relative={0}></InvestRecord>
             <hr></hr>
             <InvestRecord Investor={"Adani Tech"} Valuation={"100B"} Equity={"10%"} Relative={3}></InvestRecord>
             <hr></hr>
             <InvestRecord Investor={"Adani Tech"} Valuation={"100B"} Equity={"10%"} Relative={-14}></InvestRecord>
        </div>
    </div>
  )
}

export default Iinvest;
