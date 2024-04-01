function Advcards(props) {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-400 rounded-xl font-montserrat">
      <div class="w-80 h-96 rounded overflow-hidden shadow-lg">
        <img class="w-80 h-48" src={props.ProjectLogo} alt="Sunset in the mountains"/>
        <div class="px-6 py-4 w-80 h-36">
          <div class="font-bold text-xl mb-2 text-white text-center">{props.ProjectName}</div>
          <p class="text-base text-center text-gray-100 line-clamp-3">
            {
            props.ProjectDescribe
            }
          </p>
        </div>
        <div className="text-center text-xl font-semibold bg-white p-2 rounded-lg">
          <a href="#" className="text-blue-500 hover:text-blue-700 ">Explore it</a>
        </div>
        </div>
    </div>
      )
}

export default Advcards
