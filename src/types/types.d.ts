export type Id = {
  id: number | undefined
}
export type DocumentId = {
  documentId: string
}

export interface Params {
  id: string
}

export interface ParamProp {
  params: Promise<Params>
}

export type Employee = {
  id?: number
  name: string
  role: string
  documentId: string
}
export type People = {
  id?: number
  any?: any
}

export type EmployeeTableProps = {
  employees: Employee[]
}
