import styles from './MainNavbar.module.css';

import NavbarButtons from '../NavbarButtons/NavbarButtons';

import logoFmei from '../../assets/imgs/logo-transp-fmei.png';

function MainNavbar(){
    return(
        <nav className={styles.mainNavbar}>
            <figure>
                <img src={logoFmei} alt="Logo do FacilitaMEI" />
            </figure> 
        </nav>
    );
};

export default MainNavbar;