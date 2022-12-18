import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrBefore);

const FIRST_DATE = dayjs('2023-01').startOf('week');
const LAST_DATE = dayjs('2023-01').endOf('month');
const LAST_CAL_DATE = LAST_DATE.endOf('week');
const WEDDING_DATE = dayjs('2023-01-06');

function Calendar() {
  const calendarDays = useMemo(() => {
    const calendar = [];

    for (let cur = FIRST_DATE; cur.isSameOrBefore(LAST_CAL_DATE); cur = cur.add(1, 'day')) {
      calendar.push(cur);
    }

    return calendar;
  }, []);

  return (
    <section className="section">
      <h1 className="text-5xl mb-2">일월</h1>
      <div className="w-full grid place-items-center grid-cols-7 p-8">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <span key={day} className="text-4xl">{day}</span>
        ))}
        {calendarDays.map((day) => (day.isSame(WEDDING_DATE, 'date')
          ? (
            <p
              className="text-4xl flex flex-col items-center
               text-amber-400 bg-yellow-200 p-2 rounded-full"
              key={day.format('MM-DD')}
            >
              <span className="">{day.date()}</span>
            </p>
          )
          : (
            <span
              key={day.format('MM-DD')}
              className={`
              text-4xl
              ${day.day() === 6 ? 'text-blue-500' : ''}
              ${day.day() === 0 ? 'text-red-500' : ''}
              ${day.isAfter(LAST_DATE, 'date') ? 'text-neutral-400' : ''}
            `}
            >
              {day.date()}
            </span>
          )))}
      </div>
    </section>
  );
}

export default Calendar;
