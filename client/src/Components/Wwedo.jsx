import Homecards from './Homecards'


function Wwedo() {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-gray-600 font-montserrat p-6 md:p-12'>
      <div className='text-white text-4xl md:text-6xl p-3 md:p-20 text-center'>What we do?</div>
      <div className='flex flex-wrap justify-center gap-10'>
      <div className="bg-cover bg-center h-screen" style={{backgroundImage: "url(../assets/image.png)"}}>
      This is to add the background to this image
      </div>
        <Homecards textover="Most Reliable Investing Options" textin ="Invest with confidence, where reliability meets opportunity. This is also same"/>
        <Homecards textover="Most Reliable Investing Options" textin ="Invest with confidence, where reliability meets opportunity. This is also same"/>
        <Homecards textover="Most Reliable Investing Options" textin ="Invest with confidence, where reliability meets opportunity. Thisi is also same"/>
      </div>
    </div>
  )
}

export default Wwedo
