import styles from './NavbarButtons.module.css';

import homeIcon from '../../assets/icons/home_icon.svg';
import calendarIcon from '../../assets/icons/calendar_icon.svg';

function NavbarButtons(){
    return(
        <ul className={styles.navbarButtons}>
            <li>
                <img src={homeIcon} alt="Ícone de início" />
            </li>
            <li>
                <img src={calendarIcon} alt="Ícone de calendário" />
            </li>
            <li>
                <img src={homeIcon} alt="Ícone de início" />
            </li>
            <li>
                <img src={calendarIcon} alt="Ícone de calendário" />
            </li>
        </ul>
    );
};

export default NavbarButtons;