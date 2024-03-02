import Modelcard from "../Components/modelcard"
''
function Models() {
  return (
    <div className='bg-gray-900'>
      <div className='text-5xl font-semibold flex justify-center items-center text-white p-5'>
        AI Models
      </div>
      <Modelcard/>
      <Modelcard/>
      <Modelcard/>
      <Modelcard/>
    </div>
  )
}

export default Models
