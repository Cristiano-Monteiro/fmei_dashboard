import styles from './FinancialInformation.module.css';

import statsIcon from '../../assets/icons/query_stats.svg';

function FinancialInformation(){
    return(
        <>
            <section className={styles.financialInformationContainer}>
                <div className={styles.text}>
                    <img src={statsIcon} alt="Ícone da seção de informações" />
                    <h1>Informações</h1>
                </div>
                <div className={styles.financialInformationWrapper}>
                    <div className={styles.financialInformation}></div>
                    <div className={styles.financialInformation}></div>
                    <div className={styles.financialInformation}></div>
                </div>
            </section>
        </>
    );
};

export default FinancialInformation;