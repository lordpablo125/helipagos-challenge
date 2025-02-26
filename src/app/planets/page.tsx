'use client'
import React from 'react'
import { useGetPlanets } from './api'
import PlanetsList from './components/PlanetsList'

const PagePlanetsList = () => {
  const { data, isLoading, error } = useGetPlanets()

  return (
    <PlanetsList
      planets={data}
      isLoadingPlanets={isLoading}
      errorLoading={error}
    />
  )
}

export default PagePlanetsList
