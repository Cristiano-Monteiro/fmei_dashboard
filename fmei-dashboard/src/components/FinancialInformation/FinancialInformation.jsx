import styles from './FinancialInformation.module.css';

import statsIcon from '../../assets/icons/query_stats.svg';

function FinancialInformation(){
    return(
        <>
            <section className={styles.chartContainer}>
                <div className={styles.text}>
                    <img src={statsIcon} alt="Ícone da seção de informações" />
                    <h1>Informações</h1>
                </div>
                <div className={styles.charts}>
                    <div className={styles.chart}></div>
                    <div className={styles.chart}></div>
                    <div className={styles.chart}></div>
                </div>
            </section>
        </>
    );
};

export default FinancialInformation;