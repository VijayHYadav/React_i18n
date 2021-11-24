import { FormattedMessage } from 'react-intl';
import translate from '../../../i18n/translate';
import { useState } from 'react';

const Form = () => {

    const [name, setName] = useState('');
    const [dogs, setDogs] = useState(0);

    return (
        <div>
            {name && translate('salute', {name: name})}
            <form>
                <FormattedMessage id="form.name.placeholder">
                    {placeholder => <input 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
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
                <div>

                    <FormattedMessage
                        id="richtext"
                        values={{num: dogs, bold: chunks => <b>{chunks}</b>}}
                    />

                    <FormattedMessage id="form.dogs.placeholder">
                        {placeholder => <input
                            value={dogs}
                            onChange={(event) => setDogs(event.target.value)}
                            type="number"
                            placeholder={placeholder}
                            name="name" />}
                    </FormattedMessage>
                </div>
            </form>
        </div>
    )
}

export default Form;