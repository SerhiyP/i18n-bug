/* global context */
/* eslint-disable prefer-template */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-fs-backend';
// const Backend = require('i18next-fs-backend');

const { join } = require('path');

const options = {
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false,
    },
    backend: {
        loadPath: join(__dirname, './translations/{{lng}}.json'),
    },
    initImmediate: false,

};

i18n.use(Backend)
    .use(initReactI18next);

i18n.init(options);

export default i18n;
