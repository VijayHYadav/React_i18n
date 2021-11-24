import { LOCALES } from '../i18n/constant';
import {getFromStorage} from "../../utils/localeStorage";

export default {
    locale: getFromStorage('locale') || LOCALES.ENGLISH,
};