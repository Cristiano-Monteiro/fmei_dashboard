import { GlobalStyle } from "../Global";

import { 
    DashboardHeader, 
    FinancialInformation, 
    FinancialInformationContent, 
    FmeiDashboardContainer,
    PageNavbar,
    ToolsNavbar,
} from "./FmeiDashboard.styles";

import LogoFMEI from '../../assets/imgs/logo_facilita_mei.png';

import QuestionIcon from '../../assets/icons/question-icon.svg';
import ArrowUpIcon from '../../assets/icons/arrow-up-icon.svg';
import MoneyIcon from '../../assets/icons/money-icon.svg';
import BarChartIcon from '../../assets/icons/bar-chart-icon.svg';

import HomeIcon from '../../assets/icons/home-icon.svg';
import AddIcon from '../../assets/icons/add-icon.svg';
import CalendarMonthIcon from '../../assets/icons/calendar-month-icon.svg';

export function FmeiDashboard(){
    return(
        <FmeiDashboardContainer>
            <DashboardHeader>
                <figure>
                    <img src={LogoFMEI} alt="Logo do FacilitaMEI" />
                </figure>
                <button type='button'>
                    <img src={QuestionIcon} alt="Botão de ajuda" />
                </button>
            </DashboardHeader>
            <FinancialInformation>
                <FinancialInformationContent>
                    <div>
                        <span>Receita</span>
                        <span>00.000</span>
                    </div>
                    <figure>
                        <img src={ArrowUpIcon} alt="Ícone de seta indicativa sobre o dado" />
                    </figure>
                </FinancialInformationContent>
                <FinancialInformationContent>
                    <div>
                        <span>Receita</span>
                        <span>00.000</span>
                    </div>
                    <figure>
                        <img src={ArrowUpIcon} alt="Ícone de seta indicativa sobre o dado" />
                    </figure>
                </FinancialInformationContent>
                <FinancialInformationContent>
                    <div>
                        <span>Receita</span>
                        <span>00.000</span>
                    </div>
                    <figure>
                        <img src={ArrowUpIcon} alt="Ícone de seta indicativa sobre o dado" />
                    </figure>
                </FinancialInformationContent>
            </FinancialInformation>
            <PageNavbar>
                <div>
                    <figure>
                        <img src={MoneyIcon} alt="Ícone de indicadores financeiros" />
                    </figure>
                    <h2>Indicadores Financeiros</h2>
                </div>
                <div>
                    <figure>
                        <img src={BarChartIcon} alt="Ícone de gráficos financeiros" />
                    </figure>
                    <h2>Gráficos Financeiros</h2>
                </div>
            </PageNavbar>   
            <ToolsNavbar>
                <ul>
                    <li>
                        <img src={HomeIcon} alt="Botão de Início da página" />
                    </li>
                    <li>
                        <img src={AddIcon} alt="Botão de Adicionar Tabela de dados" />
                    </li>
                    <li>
                        <img src={CalendarMonthIcon} alt="Botão de Calendário" />
                    </li>
                </ul>
            </ToolsNavbar>
            <GlobalStyle/>
        </FmeiDashboardContainer>
    );
};