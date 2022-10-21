import yasseLogo from '../../assets/yasseLogo.png';
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <img className="logo" src={yasseLogo} alt="YASSE Logo" />
            <h1>Yasse</h1>
            <div className="selectLanguage">
                <ul>
                    <DropdownItem language="🇺🇸" />
                    <DropdownItem language="🇧🇷" />
                </ul>
            </div>
        </header>
    );
}

function DropdownItem(props: { language: string }) {
    return <li className="dropdownItem">{props.language}</li>;
}

export default Header;
