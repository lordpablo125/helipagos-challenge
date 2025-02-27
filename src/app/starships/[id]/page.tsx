'use client'
import React, { FC, use } from 'react'
import { useGetStarship } from '../api'
import { ParamProp, ParamsType } from '@/types/types'
import StarshipShow from '../components/StarshipShow'

const StarshipShowPage: FC<ParamProp> = ({ params }) => {
  const { id }: ParamsType = use(params)
  const { data, isLoading, error } = useGetStarship(id)

  return <StarshipShow starship={data} isLoading={isLoading} error={error} />
}

export default StarshipShowPage
