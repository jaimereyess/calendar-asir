const renderWeekdays = () => {
    const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    return weekdays.map(day => (
        <div key={day} className={`${day === 'Sábado' || day === 'Domingo' ? "bg-green-300" : "bg-green-100"}
        px-5 py-5`}>

            {day}
        </div >
    ));
};

export default renderWeekdays
