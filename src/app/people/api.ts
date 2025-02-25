import { api } from '@/lib/axiosInstance'
import { Person } from '@/types/types'
import { useQuery } from '@tanstack/react-query'

export const getPeople = async () => {
  try {
    const response = await api.get('/people')
    const data = (await response?.data.results) || []
    const formatedData = data.map((person: Person) => {
      return {
        ...person,
        id: person.url.split('/').slice(-2)[0]
      }
    })

    return formatedData
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetPeople = () => {
  const query = useQuery({
    queryKey: ['people'],
    queryFn: getPeople
  })

  return query
}

export const getPerson = async (documentId: string) => {
  try {
    const response = await api.get(`/people/${documentId}`)
    const data = (await response?.data.data) || {}

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetPerson = (documentId: string) => {
  const { data } = useQuery({
    queryKey: ['people'],
    queryFn: () => getPerson(documentId)
  })

  return data
}
