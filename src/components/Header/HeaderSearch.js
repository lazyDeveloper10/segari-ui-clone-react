import {useEffect, useState} from "react";
import HeaderLocation from "./HeaderLocation";

export default function HeaderSearch() {
    const [isStickyHeader, setIsStickyHeader] = useState(false);

    useEffect(() => {
        const onScroll = e => {
            if (e.target.documentElement.scrollTop >= 60 ) {
                setIsStickyHeader(true);
            } else {
                setIsStickyHeader(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [isStickyHeader]);

    if (isStickyHeader) {
        return (
            <div className={'headerSearchContainer ' + (isStickyHeader ? 'HeaderSearchStickyContainer' : '')}>
                <div className="headerSearchWrapper">
                    <input className="inputLarge" placeholder="Mau beli apa hari ini?"/>
                    <HeaderLocation/>
                </div>
            </div>
        );
    } else {
        return (
            <div className={'headerSearchContainer ' + (isStickyHeader ? 'HeaderSearchStickyContainer' : '')}>
                <div className="headerSearchWrapper">
                    <input className="inputLarge" placeholder="Mau beli apa hari ini?"/>
                </div>
            </div>
        );
    }
}
