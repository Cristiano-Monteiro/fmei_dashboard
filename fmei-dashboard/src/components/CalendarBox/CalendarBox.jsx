import styles from './CalendarBox.module.css';

import dateRangeIcon from '../../assets/icons/date_range_icon.svg';

function CalendarBox(){
    return(
        <div className={styles.calendarBoxContainer}>
            <div className={styles.calendarBoxContent}>
                <div className={styles.inputDateContainer}>
                    <figure>
                        <img src={dateRangeIcon} alt="Ícone de escolha de datas no calendário" />
                    </figure>
                    <input type="date" name="inputDate" id="inputDate" />
                </div>
                <div className={styles.inputDateContainer}>
                    <figure>
                        <img src={dateRangeIcon} alt="Ícone de escolha de datas no calendário" />
                    </figure>
                    <input type="date" name="inputDate" id="inputDate" />
                </div>
            </div>
        </div>
    );
};

export default CalendarBox;