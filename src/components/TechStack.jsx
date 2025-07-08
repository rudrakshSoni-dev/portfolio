import React from 'react'
import Data from '../assets/techStack'





const TechStack = (Data) => {
  return (
    <div className='flex p-2 br-surface rounded'>
      <img src={Date.image} className=''/>
      <span>{Data.name}</span>
    </div>
  )
}

export default TechStack
