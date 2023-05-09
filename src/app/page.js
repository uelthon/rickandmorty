import React from 'react'

import ContainerGallery from '@/components/ContainerGallery'
import PageButtons from '@/components/PageButtons'
import Search from '@/components/Search'
import Card from '@/components/Card'
import api from '@/services/api'

export default async function Home ({ params, searchParams }) {
  const data = await api.getAll(searchParams)
  return (
    <div className='p-4 w-full flex flex-col justify-start gap-4'>
      <div className='w-full flex justify-center items-center'>
        <Search currentParams={searchParams} defaultValue={searchParams?.name || ''} />
      </div>
      <div className='w-full flex justify-center items-center'>
        <PageButtons
          page={searchParams?.page || 1}
          total={data?.info?.pages || 1}
          currentParams={searchParams}
        />
      </div>
      <ContainerGallery>
        {data?.results && data.results.map(e =>
          <Card key={e.id} name={e.name} image={e.image} id={e.id} />
        )}
      </ContainerGallery>
    </div>
  )
}
