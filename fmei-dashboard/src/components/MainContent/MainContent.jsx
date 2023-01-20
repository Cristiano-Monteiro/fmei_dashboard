import styles from './MainContent.module.css';

import statsIcon from '../../assets/icons/query_stats.svg';

function MainContent(){
    return(
        <div className={styles.mainContent}>
            <section className={styles.chartContainer}>
                <div className={styles.text}>
                    <img src={statsIcon} alt="Ícone" />
                    <h1>Informações</h1>
                </div>
                <div className={styles.charts}>
                    <div className={styles.chart}></div>
                    <div className={styles.chart}></div>
                    <div className={styles.chart}></div>
                </div>
            </section>
        </div>
    );
};

export default MainContent;