import Advcards from "../Components/advcards"

function Models() {
  return (
    <div className='bg-gray-900 flex flex-col justify-center items-center'>
      <div className='text-5xl font-semibold flex justify-center items-center text-white p-5 pt-4 md:pt-10'>
        AI Models
        </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-20 w-3/5 md:w-4/5">
      <Advcards/>
      <Advcards/>
    </div>
    </div>
  )
}

export default Models
