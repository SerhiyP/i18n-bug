import i18n from 'i18next';
import Backend from 'i18next-fs-backend';

const { join } = require('path');

const options = {
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
        escapeValue: false,
    },
    backend: {
        loadPath: join(__dirname, './translations/{{lng}}.json'),
    },
    initImmediate: false,

};

i18n.use(Backend)
    .init(options);

export default i18n;
