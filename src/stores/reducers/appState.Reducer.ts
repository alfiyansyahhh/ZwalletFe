/* eslint-disable import/no-anonymous-default-export */

import {
  AppStateAction,
  AppStateType,
  IAppState,
} from 'stores/types/appStateTypes';

const initialState = {
  appState: '',
  mainRoute: '',
};

export default (
  state: IAppState = initialState,
  { type, payload }: AppStateAction
) => {
  switch (type) {
    case AppStateType.SET_APPSTATE:
      return { ...state, ...payload };
    case AppStateType.SET_MAINROUTE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
