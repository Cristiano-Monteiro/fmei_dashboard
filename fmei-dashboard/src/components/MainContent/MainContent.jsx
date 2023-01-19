import styles from './MainContent.module.css';

function MainContent(){
    return(
        <div className={styles.mainContent}>
            <section>
                <div className={styles.chartTitle}>
                    <span></span>
                    <h1>Informações</h1>
                </div>
                <div className={styles.chartContainer}>
                    <div></div>
                </div>
            </section>
        </div>
    );
};

export default MainContent;