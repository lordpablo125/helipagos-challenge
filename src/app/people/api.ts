import { api } from '@/lib/axiosInstance'
import { DocumentId, Id } from '@/types/types'
import { useMutation, useQuery } from '@tanstack/react-query'

export const getPeoples = async () => {
  try {
    const response = await api.get('/people')
    const data = (await response?.data.results) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

// people
// People

export const useGetPeoples = () => {
  const { data } = useQuery({
    queryKey: ['people'],
    queryFn: getPeoples
  })

  return data
}

export const getPeople = async (documentId: string) => {
  try {
    const response = await api.get(`/people/${documentId}`)
    const data = (await response?.data.data) || {}

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetPeople = (documentId: string) => {
  const { data } = useQuery({
    queryKey: ['people'],
    queryFn: () => getPeople(documentId)
  })

  return data
}

export const createPeople = async (people: people) => {
  try {
    const payload = { data: people }
    const response = await api.post('/people', payload)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return {}
  }
}

export const useCreatePeople = () =>
  useMutation({
    mutationFn: createPeople
  })

export const editPeople = async ({
  documentId,
  people
}: {
  documentId: DocumentId
  people: people
}) => {
  try {
    const payload = { data: people }
    const response = await api.put(`/people/${documentId}`, payload)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useEditPeople = () => {
  return useMutation({
    mutationFn: editPeople
  })
}

export const deletePeople = async (id: Id) => {
  try {
    const response = await api.delete(`/people/${id}`)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useDeletePeople = (params: object) => {
  return useMutation({
    ...params,
    mutationFn: deletePeople
  })
}
