import hpdn from "./../assets/download.jpg"

function Features(props) {
  return (
    <div className="">
      <div className="flex justify-center items-center mb-4 md:mb-10">
        <img className="inline sm:hidden rounded-2xl" src={hpdn}></img>
      </div>
      <div className="max-w-sm flex flex-cols justify-center bg-white border border-purple-200 rounded-lg shadow dark:bg-purple-900 dark:border-purple-900 hover:bg-purple-600 mb-8 md:mb-20">
          <img className="hidden sm:inline rounded-2xl" src={hpdn}></img>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl flex flex-row flex-wrap font-bold tracking-tight text-gray-900 dark:text-white">{props.texttit}</h5>
              </a>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-w-25 max-h-20 overflow-hidden">{props.textin}</div>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-900 rounded-lg hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-900 dark:hover:bg-purple-400 dark:focus:ring-purple-800">
                  Read more
              </a>
          </div>
    </div>
  </div>
  )
}

export default Features;
