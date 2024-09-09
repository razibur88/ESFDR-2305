import React from 'react'

const Flex = ({children,className}) => {
  return (
    <div className={`flex flex-wrap ${className}`}>{children}</div>
  )
}

export default Flex