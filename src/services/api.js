const baseUrl = 'https://rickandmortyapi.com/api/character'

const getAll = async (params) => {
  const url = new URLSearchParams(params)
  const res = await fetch(`${baseUrl}?${url.toString()}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    return null
  }
  const data = await res.json()
  return data
}

const getOne = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    return null
  }
  const data = await res.json()
  return data
}

export default {
  getAll,
  getOne
}
