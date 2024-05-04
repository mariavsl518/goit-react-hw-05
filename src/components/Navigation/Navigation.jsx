import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';

export default function Navigation() {
    return(
        <nav className={css.navLine}>
            <NavLink to='/' className={css.navTitle}>
                Home
            </NavLink>
            <NavLink to='/movies' className={css.navTitle}>
                Movies
            </NavLink>
        </nav>
    )
}