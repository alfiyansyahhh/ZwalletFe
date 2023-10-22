import {
  AppStateAction,
  AppStateType,
  IAppState,
} from 'stores/types/appStateTypes';

export const setAppState = (
  appState: IAppState['appState']
): AppStateAction => ({
  type: AppStateType.SET_APPSTATE,
  payload: {
    appState,
  },
});
export const setMainRoute = (
  mainRoute: IAppState['mainRoute']
): AppStateAction => ({
  type: AppStateType.SET_MAINROUTE,
  payload: {
    mainRoute,
  },
});
