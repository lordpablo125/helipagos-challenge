'use client'
import React from 'react'
import PeopleList from './components/PeopleList'
import { useGetPeople } from './api'

const PagePeopleList = () => {
  const { data, isLoading, error } = useGetPeople()

  return (
    <PeopleList
      people={data}
      isLoadingPeople={isLoading}
      errorLoading={error}
    />
  )
}

export default PagePeopleList
