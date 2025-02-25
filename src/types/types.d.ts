export type Id = {
  id: number | undefined
}
export type DocumentId = {
  documentId: string
}

export interface ParamsType {
  id: string
}

export interface ParamProp {
  params: Promise<Params>
}

export interface Person {
  id: string
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export type People = {
  people: Person[]
}
