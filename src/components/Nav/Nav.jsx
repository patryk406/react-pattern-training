import { useMobile } from './useMobile'
import { MobileNavItem, DesktopNavItem } from './NavType';
import './style.css';
export default function Nav() {
    const { isMobile } = useMobile();
    return isMobile ? <MobileNavItem /> : <DesktopNavItem />
}