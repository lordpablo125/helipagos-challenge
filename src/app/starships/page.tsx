'use client'
import React from 'react'
import { useGetStarships } from './api'
import StarshipsList from './components/StarshipsList'

const PageStarshipsList = () => {
  const { data, isLoading, error } = useGetStarships()

  return (
    <StarshipsList
      planets={data}
      isLoadingPlanets={isLoading}
      errorLoading={error}
    />
  )
}

export default PageStarshipsList
