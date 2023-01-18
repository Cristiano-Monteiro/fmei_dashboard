import styles from './MobileNavbar.module.css';

import NavbarButtons from '../NavbarButtons/NavbarButtons';

function MobileNavbar(){
    return(
        <nav className={styles.mobileNavbar}>
            <NavbarButtons/>
        </nav>
    )
};

export default MobileNavbar;