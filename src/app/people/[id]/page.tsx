'use client'
import React, { FC, use } from 'react'
import PersonShow from '../components/PersonShow'
import { useGetPerson } from '../api'
import { ParamProp, ParamsType } from '@/types/types'

const PersonShowPage: FC<ParamProp> = ({ params }) => {
  const { id }: ParamsType = use(params)
  const { data, isLoading, error } = useGetPerson(id)

  return <PersonShow person={data} isLoading={isLoading} error={error} />
}

export default PersonShowPage
