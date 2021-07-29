import React, { Fragment } from 'react';
import UseCalendar from './UseCalendar';

const Calendar = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = UseCalendar();

  const dateClickHandler = date => {
    console.log(date);
  }

  return(
    <Fragment>
      <p style={{
        color: "black",
        marginTop: "10px",
        marginBottom: "20px",
        textAlign: "center"
      }}>
        <b>
          Selected Month: {`${monthNames[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`}
        </b>
      </p>
      <table className="table">
        <thead>
          <tr>
            {daysShort.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            Object.values(calendarRows).map(cols => {
              return <tr key={cols[0].date}>
                {cols.map(col => (
                  col.date === todayFormatted
                    ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                      {col.value}
                    </td>
                    : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                ))}
              </tr>
            })
          }
        </tbody>
      </table>

      <div style={{textAlign: "center"}}>
        <button className="button" 
          onClick={getPrevMonth}
          style={{
            backgroundColor: "white", 
            borderColor: "black",
            marginTop: "20px",
            marginRight: "25px"
          }}>
            Prev
        </button>
        <button className="button" 
          onClick={getNextMonth}
          style={{
            backgroundColor: "white", 
            borderColor: "black",
            marginTop: "20px",
            marginLeft: "25px"
          }}>
            Next
        </button>
      </div>
    </Fragment>
  );
}

export default Calendar;