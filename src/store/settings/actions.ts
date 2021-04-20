import {IRootState} from './../index';
import {
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  LanguageDispatch,
  ThemeDispatch,
} from './types';

export const changeTheme = (theme: string) => async (
  dispatch: ThemeDispatch,
) => {
  await dispatch({type: CHANGE_THEME, theme});
};

export const changeLanguage = () => async (
  dispatch: LanguageDispatch,
  getState: () => IRootState,
) => {
  const {language} = getState().settingsReducer;
  let selectedLanguage = '';
  if (language === 'ar') {
    selectedLanguage = 'en';
  } else {
    selectedLanguage = 'ar';
  }
  await dispatch({type: CHANGE_LANGUAGE, language: selectedLanguage});
};
