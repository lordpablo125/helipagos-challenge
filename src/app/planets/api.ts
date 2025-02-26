import { api } from '@/lib/axiosInstance'
import { Planet } from '@/types/types'
import { useQuery } from '@tanstack/react-query'

export const getPlanets = async () => {
  try {
    const response = await api.get('/planets')
    const data = (await response?.data.results) || []
    const formatedData = data.map((planet: Planet) => {
      return {
        ...planet,
        id: planet.url.split('/').slice(-2)[0]
      }
    })

    return formatedData
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetPlanets = () => {
  const query = useQuery({
    queryKey: ['planets'],
    queryFn: getPlanets
  })

  return query
}

export const getPlanet = async (id: string) => {
  try {
    const response = await api.get(`/planets/${id}/`)
    const data = (await response?.data) || {}

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetPlanet = (documentId: string) => {
  const query = useQuery({
    queryKey: ['planet'],
    queryFn: () => getPlanet(documentId)
  })

  return query
}
