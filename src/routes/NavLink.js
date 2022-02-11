import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function NavLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className={( match ? 'isActive' : '' )} to={to} {...props}>
            {children}
        </Link>
    )
}
