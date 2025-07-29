import React from "react";
import { Container, Table, Card } from "react-bootstrap";

const scheduleData = [
  {
    day: "Monday",
    slots: [
      { time: "9:00 AM – 10:00 AM", subject: "Web Technologies", room: "A203" },
      {
        time: "11:00 AM – 12:00 PM",
        subject: "Information Architecture",
        room: "Lab 2",
      },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      {
        time: "10:00 AM – 11:00 AM",
        subject: "Software Engineering",
        room: "B102",
      },
      { time: "1:00 PM – 2:00 PM", subject: "Web Technologies", room: "A203" },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      {
        time: "9:00 AM – 10:00 AM",
        subject: "Software Engineering",
        room: "B102",
      },
      {
        time: "2:00 PM – 3:00 PM",
        subject: "Information Architecture",
        room: "Lab 2",
      },
    ],
  },
];

const TeacherSchedule = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">🗓️ Weekly Class Schedule</h2>
      {scheduleData.map(({ day, slots }) => (
        <Card className="mb-4 shadow-sm" key={day}>
          <Card.Header className="bg-primary text-white fw-semibold">
            {day}
          </Card.Header>
          <Card.Body>
            <Table responsive bordered>
              <thead className="table-light">
                <tr>
                  <th>Time</th>
                  <th>Subject</th>
                  <th>Room</th>
                </tr>
              </thead>
              <tbody>
                {slots.map(({ time, subject, room }, i) => (
                  <tr key={i}>
                    <td>{time}</td>
                    <td>{subject}</td>
                    <td>{room}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default TeacherSchedule;
