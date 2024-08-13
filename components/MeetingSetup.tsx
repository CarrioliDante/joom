'use client'
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void
}) => {
  const [isMicTamToggledOn, setIsMicTamToggledOn] =
    useState(false)
  const call = useCall()
  if (!call) {
    throw new Error(
      'UseCall must be used within streamcall component'
    )
  }

  useEffect(() => {
    if (isMicTamToggledOn) {
      call?.camera.disable()
      call?.microphone.disable()
    }
    call?.camera.enable()
    call?.microphone.enable()
  }, [isMicTamToggledOn, call?.camera, call?.microphone])

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
      <h1 className='font-bald text-2xl'>Setup</h1>
      <VideoPreview className='' />
      <div className='flex h-16 items-center justify-center gap-3'>
        <label className='flex items-center justify-center gap-2 font-medium'>
          <input
            type='checkbox'
            checked={isMicTamToggledOn}
            onChange={(e) =>
              setIsMicTamToggledOn(e.target.checked)
            }
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className='rounded-md bg-green-500 px-4 py-2.5'
        onClick={() => {
          call.join()
          setIsSetupComplete(true)
        }}
      >
        Join Meeting
      </Button>
    </div>
  )
}

export default MeetingSetup
