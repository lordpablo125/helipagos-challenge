import { api } from '@/lib/axiosInstance'
import { useQuery } from '@tanstack/react-query'

export const getStarships = async () => {
  try {
    const response = await api.get('/starships')
    const data = (await response?.data.results) || []
    const formatedData = data.map((starship: any) => {
      return {
        ...starship,
        id: starship.url.split('/').slice(-2)[0]
      }
    })

    return formatedData
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetStarships = () => {
  const query = useQuery({
    queryKey: ['starships'],
    queryFn: getStarships
  })

  return query
}

export const getStarship = async (id: string) => {
  try {
    const response = await api.get(`/starships/${id}/`)
    const data = (await response?.data) || {}

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetStarship = (documentId: string) => {
  const query = useQuery({
    queryKey: ['starship'],
    queryFn: () => getStarship(documentId)
  })

  return query
}
