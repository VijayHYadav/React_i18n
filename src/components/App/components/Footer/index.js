import { LOCALES } from '../../../i18n/constant';
import './style.css';

const Footer = () => {
    return (
        <div className="App-footer">
            <ul>
                <li><button>English</button></li>
                <li><button>French</button></li>
                <li><button>German</button></li>
            </ul>
        </div>
    )
}

export default Footer;