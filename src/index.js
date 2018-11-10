import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import i18next from 'i18next'
import XHR from 'i18next-xhr-backend'
import { I18nextProvider } from 'react-i18next'
import LngDetector from 'i18next-browser-languagedetector'
import common_pt from "./translations/pt/common.json";
import common_en from "./translations/en/common.json";

i18next
  .use(XHR)
  .use(LngDetector)
  .init({
    debug: false,
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    resources: {
      en: {
        common: common_en
      },
      pt: {
        common: common_pt
      },
    },
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
})

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
)
registerServiceWorker()
