import styles from './MobileNavbar.module.css';

import NavbarButtons from '../NavbarButtons/NavbarButtons';

function MobileNavbar({showInputFileBox, showCalendarBox}){
    return(
        <nav className={styles.mobileNavbar}>
            <NavbarButtons 
                showInputFileBox={showInputFileBox}
                showCalendarBox={showCalendarBox}
            />
        </nav>
    )
};

export default MobileNavbar;