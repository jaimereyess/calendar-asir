"use client"
import React, { useState } from "react";
import "./app.css"
import renderWeekdays from "@/components/render-weekdays";
import CalendarModal from "@/components/day-modal";


function App() {
    const [sDate, setsDate] = useState(new Date());

    const findMonthDays = (y, m) => {
        return new Date(y, m + 1, 0).getDate();
    };

    const findFirstDay = (y, m) => {
        const firstDay = new Date(y, m, 1).getDay();
        return firstDay === 0 ? 6 : firstDay - 1;
    };

    const changeToPrevMonth = () => {
        setsDate((pDate) => {
            const pMonth = pDate.getMonth() - 1;
            const pYear = pDate.getFullYear();
            return new Date(pYear, pMonth);
        });
    };

    const changeToNextMonth = () => {
        setsDate((pDate) => {
            const nMonth = pDate.getMonth() + 1;
            const nYear = pDate.getFullYear();
            return new Date(nYear, nMonth);
        });
    };

    const handleDateClick = (date) => {
        setsDate(date);
    };

    const showCalendar = () => {
        const y = sDate.getFullYear();
        const m = sDate.getMonth();
        const mDays = findMonthDays(y, m);
        const fDay = findFirstDay(y, m);

        const allDays = [];

        allDays.push(renderWeekdays())

        // For empty cells
        for (let p = 0; p < fDay; p++) {
            allDays.push(<div key={`em-${p}`} className="bg-[#d6d6d6] box cursor-default"></div>);
        }

        // Show actual days
        for (let d = 1; d <= mDays; d++) {
            const date = new Date(y, m, d);
            const isSelected = sDate && date.toDateString() === sDate.toDateString();

            allDays.push(
                <div
                    key={`d-${d}`}
                    className={`${isSelected ? "bg-green-600 text-white" : "bg-[#f0f0f0] hover:bg-green-200"} box`}
                    onClick={() => handleDateClick(date)}
                >
                    {d}
                    <CalendarModal
                        day={d}
                        month={
                            new Date(sDate.getFullYear(), sDate.getMonth()).toLocaleString("default", {
                                month: "long",
                            })
                        } />
                </div >
            );
        }

        return allDays;
    };

    return (
        <main>
            <h1 className="text-center text-white text-4xl font-bold mt-10">2º ASIR</h1>
            <div className="main w-sccreen mt-10 p-8">
                <div className="header">
                    <button
                        className="bg-green-700 text-white px-2 py-3 rounded-lg hover:bg-green-800 w-44"
                        onClick={changeToPrevMonth} >
                        {new Date(sDate.getFullYear(), sDate.getMonth() - 1).toLocaleString("default", {
                            month: "long",
                        }).toUpperCase()}
                    </button>
                    <h2 className="text-white font-semibold text-2xl">
                        {sDate.toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                        }).toUpperCase()}
                    </h2>
                    <button
                        className="bg-green-700 text-white px-2 py-3 rounded-lg hover:bg-green-800 w-44"
                        onClick={changeToNextMonth} >
                        {new Date(sDate.getFullYear(), sDate.getMonth() + 1).toLocaleString("default", {
                            month: "long",
                        }).toUpperCase()}
                    </button>
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {showCalendar()}
                </div>
                {sDate && (
                    <div className="selected-date text-white">
                        Selected Date: {sDate.toLocaleDateString()}
                    </div>
                )}
            </div>
        </main>
    );
}

export default App;

