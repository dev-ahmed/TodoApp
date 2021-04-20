import {Reducer} from 'redux';
import {CHANGE_THEME, SettingsAction, SettingsState} from './types';

const initialState = {
  theme: 'light',
};

export const settingsReducer: Reducer<SettingsState, SettingsAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};
