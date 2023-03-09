import { NavLink } from 'react-router-dom';

import { PageNavbarContainer } from './PageNavbar.styles';

import MoneyIcon from '../../../assets/icons/money-icon.svg';
import BarChartIcon from '../../../assets/icons/bar-chart-icon.svg';

export function PageNavbar(){
    return(
        <PageNavbarContainer>
            <NavLink to='/financialindicators' title='FinancialIndicators'>
                <figure>
                    <img src={MoneyIcon} alt="Ícone de indicadores financeiros" />
                </figure>
                <h2>Indicadores Financeiros</h2>
            </NavLink>
            <NavLink to='/financialcharts' title='FinancialCharts'>
                <figure>
                    <img src={BarChartIcon} alt="Ícone de gráficos financeiros" />
                </figure>
                <h2>Gráficos Financeiros</h2>
            </NavLink>
        </PageNavbarContainer>
    );
};