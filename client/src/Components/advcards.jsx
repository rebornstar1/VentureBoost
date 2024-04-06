import { Link } from "react-router-dom"

function Advcards(props) {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-400 rounded-xl font-montserrat">
      <div className="w-80 h-96 rounded overflow-hidden shadow-lg">
        <img className="w-80 h-48" src={props.ProjectLogo} alt="Sunset in the mountains"/>
        <div className="px-6 py-4 w-80 h-36 text-center">
          <div className="font-bold text-xl mb-1 text-gray-300 text-center">{props.ProjectName}</div>
          <p className="text-center text-md text-gray-300 line-clamp-3">
            {
            props.ProjectDescribe
            }
          </p>
        </div>
        <div className="text-center text-xl font-semibold bg-white p-2 rounded-lg relative top-1">
          <Link to={`/videoplayer/${props.id}`} className="text-blue-500 hover:text-blue-700 ">Explore it</Link>
        </div>
        </div>
    </div>
      )
}

export default Advcards
