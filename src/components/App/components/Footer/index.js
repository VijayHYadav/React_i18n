import { useContext, useCallback } from 'react';
import { saveToStorage } from '../../../../utils/localeStorage';
import { AppContext } from '../../../Context'
import { LOCALES } from '../../../i18n/constant';

import './style.css';

const Footer = () => {
    const { state, dispatch } = useContext(AppContext);

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: 'setLocale',
            locale
        });

        saveToStorage('locale', locale)
    }, []);

    return (
        <div className="App-footer">
            <ul>
                <li>
                    <button disabled={state.locale === LOCALES.ENGLISH} onClick={() => setLanguage(LOCALES.ENGLISH)}>English</button>
                </li>
                <li>
                    <button disabled={state.locale === LOCALES.FRENCH} onClick={() => setLanguage(LOCALES.FRENCH)}>French</button>
                </li>
                <li>
                    <button disabled={state.locale === LOCALES.GERMAN} onClick={() => setLanguage(LOCALES.GERMAN)}>German</button>
                </li>
            </ul>
        </div>
    )
}

export default Footer;