import yasseLogo from '../../assets/yasseLogo.png';
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <img className="logo" src={yasseLogo} alt="YASSE Logo" />
            <h1>Yasse</h1>
            <select className="selectLanguage" name="SeriesType">
                <option value="🇧🇷">🇧🇷</option>
                <option value="🇺🇸">🇺🇸</option>
            </select>
        </header>
    );
}

export default Header;
