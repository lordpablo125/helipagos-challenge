'use client'
import React from 'react'
import { useGetStarships } from './api'
import StarshipsList from './components/StarshipsList'

const PageStarshipsList = () => {
  const { data, isLoading, error } = useGetStarships()

  return (
    <StarshipsList
      starships={data}
      isLoadingStarship={isLoading}
      errorLoading={error}
    />
  )
}

export default PageStarshipsList
