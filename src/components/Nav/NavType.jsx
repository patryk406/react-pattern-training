import { GiMountainRoad } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { RiMovieLine } from 'react-icons/ri'
import { Link } from "react-router-dom"
export function DesktopNavItem() {

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/places'>Places</Link>
        </nav>
    )
}

export function MobileNavItem() {
    return (
        <nav>
            <Link to='/'><AiOutlineHome /></Link>
            <Link to='/movies'><RiMovieLine /></Link>
            <Link to='/places'><GiMountainRoad /></Link>
        </nav>
    )
}