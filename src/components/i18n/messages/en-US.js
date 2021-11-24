import { LOCALES } from "../constant"

export default {
    [LOCALES.ENGLISH]: {
        'hello': 'Hello message',
        salute: 'Hi {name}, Subscribe my Youtube channel.',
        richtext: 'I have <bold>{num, plural, one {# dog} other {# dogs}}</bold>',
        // 'menu': {
            // 'home': 'Home',
            // 'about': 'About me',
            // 'blog': 'Site blog',
            // 'contacts': 'contacts',
        // }
         'menu': {
            'home': 'Home',
            'about': 'About me',
            'blog': 'Site blog',
            'contacts': 'contacts',
        },
        form: {
            name: {
                placeholder: 'Put your name...'
            },
            dogs: {
                placeholder: 'How many dogs you have?',
            },
            select: {
                us: 'United States',
                french: 'French',
                ukraine: 'Ukraine',
                other: 'Other'
            }
        }
    }
}