import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { I18nProvider, LOCALES } from './i18n'
import { FormattedMessage } from 'react-intl';

import translate from './i18n/translate';
import Report from './report';

function App() {

  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <header className="App-header">
         
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;
