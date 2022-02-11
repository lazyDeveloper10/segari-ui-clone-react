import NavLink from "../../routes/NavLink";

export default function FooterMenu() {
    return (
        <div className="footerMenuContainer">
            <div className="footerMenuWrapper">

                <NavLink to="/product">
                    <div className="footerMenu">
                        <i className="fa fa-angle-double-up" aria-hidden="true"/>
                        <div className="footerMenuName"> Produk</div>
                    </div>
                </NavLink>

                <NavLink to="/cart">
                    <div className="footerMenu">
                        <i className="fa fa-shopping-cart" aria-hidden="true"/>
                        <div className="footerMenuName"> Keranjang</div>
                    </div>
                </NavLink>

                <NavLink to="/blog">
                    <div className="footerMenu">
                        <i className="fa fa-book" aria-hidden="true"/>
                        <div className="footerMenuName">Blog</div>
                    </div>
                </NavLink>

                <NavLink to="/help">
                    <div className="footerMenu">
                        <i className="fa fa-question-circle" aria-hidden="true"/>
                        <div className="footerMenuName">Help</div>
                    </div>
                </NavLink>

                <NavLink to="/account">
                    <div className="footerMenu">
                        <i className="fa fa-user" aria-hidden="true"/>
                        <div className="footerMenuName">Akun</div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
