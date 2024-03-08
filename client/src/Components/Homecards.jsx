function Homecards(props) {
  return (
    <div className="hover: border-solid bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <div>
        This is for another one test
      </div>
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-900 text-white">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center text-gray-400 hover:text-gray-300">{props.textover}</div>
            <p className="text-gray-700 text-base text-center hover:text-gray-600">
            {props.textin}.
            </p>
        </div>
        </div>
        <div>
        This is for another one test
      </div>
    </div>
  )
}

export default Homecards
