import React from 'react'
import { ReactNode } from 'react'

export const Rootlayout = ({children}: {children:ReactNode}) => {
  return (
    <div>{children}</div>
  )
}
export default Rootlayout