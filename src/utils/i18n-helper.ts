import memoize from 'lodash.memoize';
import {TranslateOptions} from 'i18n-js';
import {I18nManager} from 'react-native';
import i18n from 'i18n-js';
import RNRestart from 'react-native-restart';

const translationGetters = {
  en: () => require('../locales/en'),
  ar: () => require('../locales/ar'),
};

export const translate = memoize(
  (key: string, config?: TranslateOptions) =>
    i18n.t(key, config).includes('missing') ? key : i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  let isRTL = I18nManager.isRTL;
  const languageTag = I18nManager.isRTL ? 'ar' : 'en';

  i18n.fallbacks = true;
  translate.cache.clear();
  I18nManager.forceRTL(isRTL);
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

export const setRtl = (isRtl: boolean) => {
  I18nManager.forceRTL(isRtl);
  RNRestart.Restart();
};
