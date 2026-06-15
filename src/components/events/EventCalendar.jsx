import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import events from "../../data/events";

export default function EventCalendar() {
  const [calendarEvents, setCalendarEvents] = useState([]);

 useEffect(() => {
  const savedEvents =
    JSON.parse(localStorage.getItem("campina365_events")) || [];

  const allEvents = [...events, ...savedEvents];

  const formattedEvents = allEvents.map((event) => ({
    id: String(event.id),
    title: event.title,
    date: event.startDate || event.date,
  }));

  setCalendarEvents(formattedEvents);
}, []);

  return (
    <div className="calendar-container">
      <h2>Calendário de Eventos</h2>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        locale="pt-br"
        height="auto"
      />
    </div>
  );
}