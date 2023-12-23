import { Image } from 'astro:assets'
import React from 'react'

const MyCard = (props) => {
  return (
    <div className="flex flex-col h-[25rem]">
        <img className='object-contain h-[25rem]' src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default MyCard