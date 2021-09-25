import { Link } from 'react-router-dom'
export function DesktopNavItem() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li>
                    <Link to='/places'>Places</Link>
                </li>
            </ul>
        </nav>
    )
}

export function MobileNavItem() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li>
                    <Link to='/places'>Places</Link>
                </li>
            </ul>
        </nav>
    )
}