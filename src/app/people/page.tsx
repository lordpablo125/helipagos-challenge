'use client'
import React from 'react'
import PeopleList from './components/PeopleList'
import { useGetPeoples } from './api'

const PagePeopleList = () => {
  const data = useGetPeoples()

  return <PeopleList people={data} />
}

export default PagePeopleList
