import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './react-big-calendar.css';

const localizer = momentLocalizer(moment);

export const MyCalendar = () => {

  /* this is how to import events to the calender */
const fakeEvents =  [
  {
    title: 'Midterm Exam',
    start: new Date(2025, 10, 5, 10, 0),
    end: new Date(2025, 10, 5, 12, 0),
    type: 'exam'
  },
  {
    title: 'Project Proposal Due',
    start: new Date(2025, 10, 10),
    end: new Date(2025, 10, 10),
    type: 'assignment'
  }
]

function CustomToolbar({ label, onNavigate }) {
  return (
    <div className="rbc-toolbar flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
          <h2 className="rbc-toolbar-label text-xl font-bold">{label}</h2>
        <button onClick={() => onNavigate('PREV')} className="naviButton p-2 rounded hover:bg-gray-200">
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
        </button>
      
        <button onClick={() => onNavigate('NEXT')} className="naviButton p-2 bg-transparent border-none shadow-none ">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
        </button>
      </div>
      <button onClick={() => onNavigate('TODAY')} className="px-4 py-2 rounded border bg-white">
        Today
      </button>
    </div>
  );
}


  const [date, setDate] = useState(new Date());

  return (
    <div  className='flex-1' style={{display: 'flex' ,alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <Calendar
        localizer={localizer}
         events={fakeEvents}        // pass events if you have them
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        defaultView="month"
        views={['month']}
        date={date}                 // controlled date
        onNavigate={(newDate) => setDate(newDate)} // update state when navigating
          components={{ toolbar: CustomToolbar }}

      />
    </div>
  );
};