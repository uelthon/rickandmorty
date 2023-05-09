import Link from 'next/link'
import React from 'react'

const Card = ({ image, name, id }) => {
  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure><img src={image} alt={name + id} /></figure>
      <div className='card-body'>
        <h2 className='card-title'>
          <Link href={`/character/${id}`}>{name}</Link>
        </h2>
      </div>
    </div>
  )
}

export default Card
