import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-sdk'

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY

export const MyApp = () => {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}></StreamCall>
    </StreamVideo>
  )
}
