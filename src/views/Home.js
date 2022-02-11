import {lazy} from "react";
import {Routes, Navigate, Route} from "react-router-dom";

import Header from "../components/Header/Header";
import FooterMenu from "../components/Footer/FooterMenu";

// import views
const Product = lazy(() => import('./Product'));
const Cart = lazy(() => import('./Cart'));
const Blog = lazy(() => import('./Blog'));
const Help = lazy(() => import('./Help'));
const Account = lazy(() => import('./Account'));

export default function Home() {
    return (
        <div className="homeContainer">
            <Header/>

            <div className="homeContentContainer">
                <Routes>
                    <Route path="/" element={ <Navigate replace to="/product"/> } />
                    <Route path="product" element={ <Product/> }/>
                    <Route path="cart" element={ <Cart/> }/>
                    <Route path="blog" element={ <Blog/> }/>
                    <Route path="help" exact={true} element={ <Help/> }/>
                    <Route path="account" exact={true} element={ <Account/> }/>
                </Routes>
            </div>

            <FooterMenu/>
        </div>
    )
}
