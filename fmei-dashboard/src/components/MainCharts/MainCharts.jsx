import styles from './MainCharts.module.css';

import barChartIcon from '../../assets/icons/bar_chart.svg';

function MainCharts(){
    const chartsId = ['chart1','chart2','chart3','chart4'];

    return(
        <>
            <section className={styles.chartContainer}>
                <div className={styles.text}>
                    <img src={barChartIcon} alt="Ícone para a seção de gráficos" />
                    <h1>Gráficos</h1>
                </div>
                <div className={styles.charts}>
                    {chartsId.map((id) => {
                        return <div className={styles.chart} id={id} key={id}></div>
                    })}
                </div>
            </section>
        </>
    );
};

export default MainCharts;