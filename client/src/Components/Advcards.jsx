import { Link } from "react-router-dom"
import ssc from "../assets/image.png"
import React from "react"

function Advcards(props) {
  return (
    <div className="flex flex-col w-80 shadow-xl rounded-xl font-montserrat">
      <div>
       <img src={props.ProjectLogo} alt="There must be some server issue" className="w-96 h-48 rounded-t-xl"/>
      </div>
      <div className="bg-white rounded-xl">
          <div className="font-semibold text-center text-2xl pt-2 sm:pt-3">{props.ProjectName}</div>
          <div className="text-gray-400 sm:mt-1">Rating : {props.Rated}</div>
          <div className="text-sm mx-6 my-2 line-clamp-6">{props.ProjectDescribe}</div>
          <hr className="mx-3 "></hr>
          <div className="text-sm flex flex-row justify-between mx-6 my-3">
             <div className="flex flex-col">
                 <div>Valuation</div>
                 <div>{props.Valuation}</div>
             </div>
             <div className="flex flex-col">
                 <div>Funding</div>
                 <div>{props.Valuation}</div>
             </div>
             <div className="flex flex-col">
                 <div>Sales</div>
                 <div>{props.Valuation}</div>
             </div>
          </div>
      </div>
    </div>
      )
}

export default Advcards
