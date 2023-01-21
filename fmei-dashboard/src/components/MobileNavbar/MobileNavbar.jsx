import styles from './MobileNavbar.module.css';

import NavbarButtons from '../NavbarButtons/NavbarButtons';

function MobileNavbar({showModal}){
    return(
        <nav className={styles.mobileNavbar}>
            <NavbarButtons showModal={showModal}/>
        </nav>
    )
};

export default MobileNavbar;