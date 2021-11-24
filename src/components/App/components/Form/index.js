import { FormattedMessage } from 'react-intl';
import translate from '../../../i18n/translate';

const Form = () => {
    return (
        <div>
            {translate('salute', {name: 'Vijay'})}
            <form>
                <FormattedMessage id="form.name.placeholder">
                    {placeholder => <input value={""}
                        type="name"
                        placeholder={placeholder}
                        name="name" />}
                </FormattedMessage>

                <select>

                    <FormattedMessage id="form.select.us">
                        {placeholder => <option value={1}>{placeholder}</option>}
                    </FormattedMessage>

                    <FormattedMessage id="form.select.french">
                        {placeholder => <option value={1}>{placeholder}</option>}
                    </FormattedMessage>

                    <FormattedMessage id="form.select.ukraine">
                        {placeholder => <option value={1}>{placeholder}</option>}
                    </FormattedMessage>

                    <FormattedMessage id="form.select.other">
                        {placeholder => <option value={1}>{placeholder}</option>}
                    </FormattedMessage>

                </select>
            </form>
        </div>
    )
}

export default Form;