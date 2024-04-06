import react from 'react'
import ReactPlayer from 'react-player'

// Only loads the YouTube player

function VideoPlayer() {
  return (
   <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=Nnop2walGmM&ab_channel=T-Series"></ReactPlayer>
   </div>
  )
}

export default VideoPlayer
