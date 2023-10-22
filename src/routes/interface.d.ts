import { ReactNode } from 'react'

export interface IRouteType {
  element: ReactNode
  state: string
  index?: boolean
  path?: string
  child?: RouteType[]
  sidebarProps?: {
    displayText: string
    icon?: ReactNode
  }
}
