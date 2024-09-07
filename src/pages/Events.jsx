// src/Events.jsx

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Events.css';

function Events() {
  const currentDate = new Date();
  const month = currentDate.getMonth(); // 0-based, so 8 is September
  const year = currentDate.getFullYear();
  const firstDay = new Date(year, month, 1).getDay(); // Day of the week for the 1st of the month
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the current month

  // Example events data with short-date format
  const events = {
    '9/4': 'React Workshop',
    '9/10': 'Hackathon',
    '9/15': 'Community Outreach Program',
    '9/20': 'Training Session',
  };

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

  // Format the date to long format for events
  const formatEventDate = (shortDate) => {
    return new Date(`${shortDate}/${year}`).toLocaleDateString('default', { month: 'long', day: 'numeric' });
  };

  return (
    <Container fluid className="events-container">
      <Row className="header-section text-center mb-4">
        <Col>
          <h1 className="text-light">Upcoming Events</h1>
          <p className="text-light">Stay updated with our latest events and activities.</p>
        </Col>
      </Row>
      <Row>
        <Col md={8} className="calendar-section">
          <div className="calendar-header text-center">
            <h3>
              {currentDate.toLocaleString('default', { month: 'long' })} {year}
            </h3>
          </div>
          <div className="calendar">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div className="day" key={day}>
                {day}
              </div>
            ))}
            {calendarDays.map((date, index) => (
              <div 
                className={`date ${date && events[`${month + 1}/${date}`] ? 'event-day' : ''}`} 
                key={index}
              >
                {date || ''}
              </div>
            ))}
          </div>
        </Col>

        <Col md={4} className="events-section">
          <Card className="bg-dark text-light border-light">
            <Card.Body>
              <h3 className="text-center">Upcoming Events</h3>
              <ul className="events-list">
                {Object.entries(events).map(([shortDate, description]) => (
                  <li key={shortDate}>
                    {formatEventDate(shortDate)}: {description}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Events;
