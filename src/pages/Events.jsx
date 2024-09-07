import React from "react";
import "../styles/Events.css";

function Events() {
  const currentDate = new Date();
  const month = currentDate.getMonth(); // 0-based, so 8 is September
  const year = currentDate.getFullYear();
  const firstDay = new Date(year, month, 1).getDay(); // Day of the week for the 1st of the month
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the current month

  // Generate an array representing the calendar days
  const calendarDays = [];

  // Fill in empty days before the 1st
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null); // Placeholder for empty cells
  }

  // Fill in the days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="events-container">
      <div className="calendar-section">
        <div className="calendar-header">
          <h3>
            {currentDate.toLocaleString("default", { month: "long" })} {year}
          </h3>
        </div>
        <div className="calendar">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div className="day" key={day}>
              {day}
            </div>
          ))}
          {calendarDays.map((date, index) => (
            <div className="date" key={index}>
              {date}
            </div>
          ))}
        </div>
      </div>

      <div className="events-list">
        <h3>Upcoming Events</h3>
        <ul>
          <li>September 4: React Workshop</li>
          <li>September 10: Hackathon</li>
          <li>September 15: Community Outreach Program</li>
          <li>September 20: Training Session</li>
        </ul>
      </div>
    </div>
  );
}

export default Events;
