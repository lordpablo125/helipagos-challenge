'use client'
import React, { FC, use } from 'react'
import { useGetPlanet } from '../api'
import { ParamProp, ParamsType } from '@/types/types'
import PlanetShow from '../components/PlanetShow'

const PlanetShowPage: FC<ParamProp> = ({ params }) => {
  const { id }: ParamsType = use(params)
  const { data, isLoading, error } = useGetPlanet(id)

  return <PlanetShow planet={data} isLoading={isLoading} error={error} />
}

export default PlanetShowPage
