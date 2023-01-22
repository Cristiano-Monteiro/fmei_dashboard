import styles from './MobileNavbar.module.css';

import NavbarButtons from '../NavbarButtons/NavbarButtons';

function MobileNavbar({showInputFileBox}){
    return(
        <nav className={styles.mobileNavbar}>
            <NavbarButtons showInputFileBox={showInputFileBox}/>
        </nav>
    )
};

export default MobileNavbar;