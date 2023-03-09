import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainPage } from "../Pages/MainPage/MainPage";

import { PageNavbar } from "../Pages/PageNavbar/PageNavbar";
import { FinancialCharts } from "../Pages/FinancialCharts/FinancialCharts";
import { FinancialIndicators } from "../Pages/FinancialIndicators/FinancialIndicators";

export function FmeiDashboard(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route path="/" element={<PageNavbar/>} />
                    <Route path="/financialindicators" element={<FinancialIndicators/>} />
                    <Route path="/financialcharts" element={<FinancialCharts/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};