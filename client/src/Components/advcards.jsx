import fipt from "../assets/image.png"

function Advcards() {
  return (
    <div
    className="min-w-screen h-screen animated fadeIn faster  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
    id="modal-id"
  >
    <div className="flex flex-row bg-black opacity-80 inset-0 z-0" />
    <div className="relative min-h-screen flex flex-col items-center justify-center ">
      <div className="container">
        <div className="max-w-md w-full bg-gray-900 shadow-lg rounded-xl p-6">
          <div className="flex flex-col ">
            <div className="">
              <div className="relative h-62 w-full mb-3">
                <div className="relative flex flex-col top-0 right-0 p-3">
                <div className="absolute bg-green-400 text-white text-1xl px-2 py-1 ml-3 rounded-lg w-max">
                      Available
                    </div>
                </div>
                <img
                  src={fipt}
                  alt="Just a flower"
                  className="   object-fill  rounded-2xl max-h-100 flex justify-center mx-auto"
                />
              </div>
              <div className="flex-auto justify-evenly">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-sm flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-400 whitespace-nowrap mr-3">
                      4.60
                    </span>
                    <span className="mr-2 text-gray-400">India</span>
                  </div>
                  <div className="flex items-center w-full justify-between min-w-0 mt-3 md:mt-5">
                    <h2 className="text-2xl font-montserrat mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate">
                      Siri, Your Personalized Friend
                    </h2>
                  </div>
                </div>
                <div className="lg:flex  py-4  text-sm text-gray-600">
                  <div className="flex-1 inline-flex items-center  mb-3">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                      <ul className="flex flex-row justify-center items-center space-x-2">
                        <li className="">
                          <span className="flex flex-row items-center p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                            <a
                              href="#blue"
                              className="block w-3 h-3  bg-blue-600 rounded-full"
                            />
                            <span className="hover:text-purple-500 p-1 py-0">Romantic</span>
                          </span>
                        </li>
                        <li className="">
                          <span className="flex flex-row items-center p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                            <a
                              href="#yellow"
                              className="block w-3 h-3  bg-yellow-400 rounded-full"
                            />
                            <span className="hover:text-purple-500 p-1 py-0">Funny</span>
                          </span>
                        </li>
                        <li className="">
                          <span className="flex flex-row p-1 border-2 items-center border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                            <a
                              href="#red"
                              className="block w-3 h-3  bg-red-500 rounded-full"
                            />
                            <span className="hover:text-purple-500 p-1 py-0">Naughty</span>
                          </span>
                        </li>
                        <li className="">
                          <span className="flex flex-row p-1 border-2 items-center border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                            <a
                              href="#green"
                              className="block w-3 h-3  bg-green-500 rounded-full"
                            />
                            <span className="hover:text-purple-500 p-1 py-0">Cute</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 text-sm font-medium justify-start">
                  <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                    <span>Wanna Speak ?</span>
                  </button>
                  <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Advcards
