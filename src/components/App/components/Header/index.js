import { FormattedMessage } from "react-intl";

const Header = () => {

    const menu = {
        'home': 'https://site.com/home',
        'about': 'https://site.com/about',
        'blog': 'https://site.com/blog',
        'contacts': 'https://site.com/contacts',
    }
    return (
        <nav>
            <ul>
                {Object.keys(menu).map(key => (
                    <li key={key}>
                        <a href={menu[key]}>
                            <FormattedMessage id={`${key}`} />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};


export default Header;