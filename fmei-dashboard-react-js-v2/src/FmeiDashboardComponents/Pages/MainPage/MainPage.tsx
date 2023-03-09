import { GlobalStyle } from "../../Global";

import { Outlet } from 'react-router-dom';

import { 
    DashboardHeader, 
    FinancialInformation, 
    FinancialInformationContent, 
    FmeiDashboardContainer,
    ToolsNavbar,
} from "../../Pages/MainPage/MainPage.styles";

import LogoFMEI from '../../../assets/imgs/logo_facilita_mei.png';

import QuestionIcon from '../../../assets/icons/question-icon.svg';
import ArrowUpIcon from '../../../assets/icons/arrow-up-icon.svg';
import HomeIcon from '../../../assets/icons/home-icon.svg';
import AddIcon from '../../../assets/icons/add-icon.svg';
import CalendarMonthIcon from '../../../assets/icons/calendar-month-icon.svg';

export function MainPage(){
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
            <Outlet/>
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