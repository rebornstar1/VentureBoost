import safeimg from "../assets/image.png"

function ThrCard() {
  return (
    <div className='w-[200px] md:w-[500px] h-[250px] md:h[750px] bg-transparent cursor-pointer group perspective'>
      <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
        <div className='absolute backface-hidden border-2 w-full h-full'>
            <img src={safeimg} alt="nothing so important" className='w-full h-full'></img>
        </div>
        <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100'>
          <div>
            <h1>Most Secure and Trusted Investment Option</h1>
            <p>bhjbbsk hasxhcg s hsajkxhhjsgygc sahksjh u ahgsaj sxagh jjgxs axjkaak</p>  
          </div>    
        </div>
      </div>
    </div>
  )
}

export default ThrCard


/*https://youtu.be/CC78NrgZkY8?feature=shared*/