export enum AppStateType {
  SET_APPSTATE = 'SET_APPSTATE',
  SET_MAINROUTE = 'SET_MAINROUTE',
}

export interface IAppState {
  appState: string
  mainRoute: string
}

interface SetAppState {
  type: AppStateType.SET_APPSTATE
  payload: {
    appState: IAppState['appState']
  }
}

interface SetMainRoute {
  type: AppStateType.SET_MAINROUTE
  payload: {
    mainRoute: IAppState['mainRoute']
  }
}

export type AppStateAction = SetAppState | SetMainRoute
