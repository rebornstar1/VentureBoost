import gype from "../assets/image.png"

export default function Cards(props) {
  return (
<div>
    <div className="max-w-sm hover:max-w-md bg-white border border-pink-200 rounded-lg shadow dark:bg-purple-800 dark:border-purple-900 font-montserrat">
        <a href="#">
            <img className="rounded-t-lg" src={gype} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{props.texttit}</h5>
            </a>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400 max-h-15">{props.textin}</p>
            <a href="#" className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-900 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
                Want to interact with me ?
            </a>
        </div>
    </div>
</div>
  )
}
