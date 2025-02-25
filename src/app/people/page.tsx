'use client'
import React from 'react'
import PeopleList from './components/PeopleList'
import { useGetPeoples } from './api'

const PagePeopleList = () => {
  const { data, isLoading, error } = useGetPeoples()

  return (
    <PeopleList
      people={data}
      isLoadingPeople={isLoading}
      errorLoading={error}
    />
  )
}

export default PagePeopleList
