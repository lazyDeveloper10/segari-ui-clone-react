import logo from '../../assets/logo/logo.webp';

import HeaderLocation from "./HeaderLocation";

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerWrapper">
                <div className="headerLogo">
                    <div className="headerLogoImageWrapper">
                        <img src={logo} alt="Logo Segari"/>
                    </div>
                </div>

                <HeaderLocation/>
            </div>
        </div>
    )
}
