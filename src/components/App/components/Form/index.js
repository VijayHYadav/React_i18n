import { FormattedMessage } from 'react-intl';
import translate from '../../../i18n/translate';

const Form = () => {
    return (
        <form>
            <FormattedMessage id="form.name.placeholder">
                {placeholder => <input value={""}
                    type="name"
                    placeholder={placeholder}
                    name="name" />}
            </FormattedMessage>

        </form>
    )
}

export default Form;