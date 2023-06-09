import React from 'react'
import Hero from '@/components/Hero'
import api from '@/services/api'

export default async function Character ({ params }) {
  const data = await api.getOne(params.id)
  return (
    <div>
      {data?.id && <Hero image={data.image} name={data.name} />}
      {!data && <p className='text-4xl text-center'>No se encontro resultados</p>}
    </div>
  )
}
