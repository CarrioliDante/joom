import React, { ReactNode } from 'react'

const Meeting = ({ params }: { params: { id: string } }) => {
  return <div>Meeting id: # {params.id}</div>
}
export default Meeting
