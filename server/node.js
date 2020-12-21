import React from 'react';
import express from 'express';

import { I18nextProvider } from 'react-i18next';

import ReactDOMServer from 'react-dom/server';

import i18n from './i18n';

const PORT = process.env.PORT || 8001;
const app = express();
app.disable('x-powered-by');

app.use(express.static('./build'));

app.use(async (req, res) => {
    const html = (
        <I18nextProvider i18n={i18n}>
            <div>test</div>
        </I18nextProvider>
    );

    ReactDOMServer.renderToString(html);
    store.close();
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
